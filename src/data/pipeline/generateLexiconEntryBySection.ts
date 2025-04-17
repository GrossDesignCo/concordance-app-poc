/**
 * Generate a Lexicon Entry one section at a time
 * - Experimental, should theoretically be more efficient and robust than one-shot generation,
 *   but so far in practice produces very inconsistent results.
 */
import { TranslationWord } from '@/types';
import { loadLexiconExamples } from '@/data/pipeline/loadLexiconExamples';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  // apiKey, // defaults to process.env["ANTHROPIC_API_KEY"]
});

const exampleEntries = await loadLexiconExamples();

// Section definitions for progressive generation
const sections = [
  {
    id: 'intro',
    name: 'Introduction',
    description: 'Title and "Picture this..." paragraph introducing the word',
    prompt: `Create just the title and introductory "Picture this..." paragraph for the Hebrew word "{{word}}". 
             This should include the Hebrew characters, transliteration, and single-word mapping. 
             Format it with the word in bold like "# **בְּרֵאשִׁ֖ית (beReshit, in-heading)**" followed by a short paragraph that helps readers visualize the concept.`,
  },
  {
    id: 'root',
    name: 'Root',
    description: 'Etymology and root breakdown',
    prompt: `Based on the title and introduction you provided, now create just the "Root" section for "{{word}}".
             This should include the root consonants, their meaning, verb/noun class if applicable, and the closest English mapping with justification.`,
  },
  // {
  //   id: 'context',
  //   name: 'In-Context',
  //   description: 'Example usages from Scripture',
  //   prompt: `Based on the content so far, now create just the "In-Context" section for "{{word}}".
  //            Show examples of how this word is used across scripture, consistently using and bolding the chosen English mapping.
  //            Include 3-4 key verses that demonstrate different usages or contexts.`,
  // },
  // {
  //   id: 'related',
  //   name: 'Related Concepts',
  //   description: 'Similar but distinct words in Hebrew',
  //   prompt: `Based on the content so far, now create just the "Related Concepts" section for "{{word}}".
  //            List 3-5 similar Hebrew words, explaining how they differ from {{word}} in meaning or usage.
  //            For each word, include its transliteration, meaning, and a brief scriptural example.`,
  // },
  // {
  //   id: 'compound',
  //   name: 'Compound Forms',
  //   description: 'Common phrases including this word',
  //   prompt: `Based on the content so far, determine if "{{word}}" commonly appears in compound forms or phrases.
  //            If it does, create a "Compound Forms" section listing these compounds with examples.
  //            If the word rarely appears in compounds, respond with "SKIP_SECTION" so we can omit this.`,
  // },
  // {
  //   id: 'greek',
  //   name: 'Greek/Septuagint Usage',
  //   description: 'Greek translations and NT connections',
  //   prompt: `Based on the content so far, create the "Greek/Septuagint Usage" section for "{{word}}".
  //            Explain how the Septuagint (LXX) translated this word, with key examples.
  //            If relevant, include New Testament connections where similar Greek terms appear.`,
  // },
  // {
  //   id: 'patterns',
  //   name: 'Biblical Patterns',
  //   description: 'Thematic patterns in usage',
  //   prompt: `Based on the content so far, determine if "{{word}}" has distinctive biblical patterns in its usage.
  //            If it does, create a "Biblical Patterns" section with subsections for each pattern, showing examples.
  //            If the word doesn't have distinctive patterns, respond with "SKIP_SECTION" so we can omit this.`,
  // },
  // {
  //   id: 'cultural',
  //   name: 'Cultural Context',
  //   description: 'Ancient cultural understanding',
  //   prompt: `Based on the content so far, create the "Cultural Context" section for "{{word}}".
  //            Help bridge the gap between modern readers and ancient understanding.
  //            Include subsections on physical-spiritual connections, ancient imagery, and a reading note for English readers.`,
  // },
];

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

/**
 * generateSection
 * - Generate one section of a lexicon entry at a time, intended to be used in a sequence to progressively generate entries
 * @param word
 * @param sectionIndex
 * @param previousSections
 * @param examples
 */
async function generateSection(
  word: TranslationWord,
  sectionIndex: number,
  previousSections: { [x: string]: string }
) {
  const currentSection = sections[sectionIndex];

  // Construct the previous sections' content
  let previousContent = '';
  for (let i = 0; i < sectionIndex; i++) {
    const sectionId = sections[i].id;
    if (
      previousSections[sectionId] &&
      previousSections[sectionId] !== 'SKIP_SECTION'
    ) {
      previousContent += previousSections[sectionId] + '\n\n';
    }
  }

  // Replace the placeholder in the prompt
  const sectionPrompt = currentSection.prompt.replace(
    /\{\{word\}\}/g,
    JSON.stringify(word)
  );

  // Construct the full prompt
  const prompt = `${
    previousContent
      ? `Content generated so far for "${word}":\n\n${previousContent}\n\n`
      : ''
  }

${sectionPrompt}

Remember to follow these principles:
1. Accuracy and preservation of the meaning in the biblical text is critical
2. Format all Hebrew with transliterations when possible
3. Stay consistent with the chosen English mapping throughout
4. Use camelCase for compound terms (e.g., "vaYomer" not "vayomer")
5. Be both scholarly and accessible
6. Focus only on generating the requested section, not the entire entry`;

  const systemPrompt: Anthropic.Messages.TextBlockParam[] = [
    {
      type: 'text',
      text: 'You are a deeply well-studied, experienced, veteran bible translator with a deep understanding of Biblical Hebrew, Greek, and Aramaic. You know the original text and manuscripts inside and out. Your responses should above-all accurately represent the biblical text and original language.',
    },
  ];

  if (sectionIndex === 0) {
    systemPrompt.push({
      type: 'text',
      text: examplesPrompt,
      cache_control: { type: 'ephemeral' },
    });
  }

  const newSection = await anthropic.messages.create({
    // model: 'claude-3-5-haiku-20241022',
    model: 'claude-3-7-sonnet-20250219',
    max_tokens: 2000,
    temperature: 0.5, // Low temperature for consistent outputs
    system: systemPrompt,
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
  });

  console.log({ newSection });

  // Get the generated content for this section
  return newSection.content[0].text.trim();
}

export async function generateLexiconEntry(word: TranslationWord) {
  // Simplify word data to only what the api needs
  const { hebrew, transliteration, englishLiteral } = word;
  const basicWord = {
    hebrew,
    transliteration,
    englishLiteral,
  };

  // All good, proceed with generation
  // Generate all sections sequentially
  const generatedSections = {};
  let completeEntry = '';

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    console.log(
      `Generating section ${i + 1}/${sections.length}: ${section.name}`
    );

    // Generate this section
    const sectionContent = await generateSection(
      basicWord,
      i,
      generatedSections
    );

    // Skip sections marked for skipping
    if (sectionContent !== 'SKIP_SECTION') {
      generatedSections[section.id] = sectionContent;
      completeEntry += sectionContent + '\n\n';
    }

    // Clean up the final entry
    completeEntry = completeEntry.trim();
  }

  return completeEntry;
}
