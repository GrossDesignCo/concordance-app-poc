/**
 * Generate a Lexicon Entry all at once / in one shot
 * - Generally giving the best results at the moment,
 *   but starts to skimp/trim towards the end
 * - Relies heavily on excellent example entries
 */
import { WordOrWordArray } from '@/types';
import { loadLexiconExamples } from '@/data/pipeline/loadLexiconExamples';
import Anthropic from '@anthropic-ai/sdk';
import { resolveLanguage } from '@/utils/resolveLanguage';

const anthropic = new Anthropic({
  // apiKey, // defaults to process.env["ANTHROPIC_API_KEY"]
});

const exampleEntries = await loadLexiconExamples();

const examplesAsText = exampleEntries
  .map((example) => {
    return `<example>
<word>
${example.word}
</word>
<ideal_output>
${example.content}
</ideal_output>
</example>`;
  })
  .join('\n\n');

const examplesPrompt = `
<examples>
${examplesAsText}
</examples>`;

export async function generateLexiconEntry({
  word,
  wordArray,
}: WordOrWordArray) {
  // Simplify word data to only what the api needs
  let original;
  let transliteration;
  let englishLiteral;

  const resolvedOGLang = resolveLanguage(
    wordArray ? wordArray?.[0] : word,
    'original'
  );

  if (wordArray) {
    original = wordArray.map((w) => w[resolvedOGLang]).join(' ');
    transliteration = wordArray.map((w) => w.transliteration).join(' ');
    englishLiteral = wordArray.map((w) => w.englishLiteral).join(' ');
  } else if (word) {
    original = word[resolvedOGLang];
    transliteration = word.transliteration;
    englishLiteral = word.englishLiteral;
  } else {
    console.error('No word provided from which to generate a lexicon entry.');
    return;
  }

  // All good, proceed with generation
  const systemPrompt: Anthropic.Messages.TextBlockParam[] = [
    {
      type: 'text',
      text: 'You are a deeply well-studied, experienced, veteran bible translator with a deep understanding of Biblical Hebrew, Greek, and Aramaic. You know the original text and manuscripts inside and out. Your responses should above-all accurately represent the biblical text and original language.',
    },
    {
      type: 'text',
      text: examplesPrompt,
      // Attempt to cache the large body of example entries (disabled for now as caching is 1.2x cost)
      // Depending on plan caching could result in actually higher cost, since input tokens are relatively cheap
      // cache_control: { type: 'ephemeral' },
    },
  ];

  const userPrompt = `Create a detailed lexicon/concordance entry for the word/phrase "${original} / ${transliteration} / ${englishLiteral}".
    
It should hold to these principles:
1. Accuracy and preservation of the meaning in the biblical text is critical.
2. You may add or remove sections as needed, depending on what patterns are relevant to the given word. Each entry should generally appear consistent but not neglect any important patterns or context for the sake of document structure.
3. Each entry should be usable as a topical sermon outline.
4. Pay careful attention to the englishLiteral mapping and use that exact word.
5. Use transliterations alongside hebrew whenever possible.
6. Use camelCase to identify prefixes, eg. \"תֹ֙הוּ֙ וָבֹ֔הוּ\" should become “Tohu vaVohu”
7. Entries should not be overly redundant

It should generally have the following sections
1. Intro (title, 'picture...')
2. Root: A breakdown of the syntax and closest English mapping. This section should be very closely structured to the example entries.
3. In-Context: A list of examples showing each different way this word/phrase is used. Always keep the specific English mapping and bold it.
4. Related Concepts: Short breakdowns of similar-but-distinct words in scripture
5. Compound Forms: _If_ this word frequently appears as part of a phrase, list short examples for each phrase. Otherwise skip this section.
6. Greek/Septuagint Usage: A list of examples of the greek translations for this word used in Jesus's time. Include examples of NT usage of the same words, especially if Jesus quoted the OT using them.
7. Patterns: If there are distinctive patterns in this word's usage, or distinctive word-plays like seven/perfect, list each pattern as a sub-section with summary and usage examples. Otherwise skip this section.
8. Cultural Context: Bridge the gap between modern English readers and the ancient Hebrew writers. Help us understand the impression/context/links this word would have triggered in readers at the time.`;

  const result = await anthropic.messages.create({
    // model: 'claude-3-5-haiku-20241022', // simpler model for cheaper tasks
    model: 'claude-3-7-sonnet-20250219', // standard model
    max_tokens: 5000,
    temperature: 0.5, // Low temperature for consistent outputs
    system: systemPrompt,
    messages: [
      {
        role: 'user',
        content: userPrompt,
      },
    ],
  });

  // Get the generated content for this section
  // @ts-expect-error - Anthropic types don't match docs
  return result.content[0].text.trim();
}
