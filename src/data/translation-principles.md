# Translation Principles

The goal is to create as close to a 1:1 Hebrew:English mapping as possible, even when treating words/concepts in seemingly strange ways to a typical English reader. This mapping serves as both a useful tool for students of scripture and helps bring familiarity with the biblical mind/conceptualization to English speakers.

## AI Usage

1. Translations may be initially AI-generated, then later human-reviewed/edited.
2. AIs should never edit translations or entries that have been human-edited without explicit permission.
3. Human-reviewed translations will be clearly marked with the name of the reviewer and date of last review.
4. AIs should always run tests after generating new translation/entry data.
5. AIs should review the dictionary as needed and add data to it as appropriate when generating verse data.

## Original Hebrew, Aramaic & Greek Principles

1. Generally use the most widely accepted text.

## Transliteration Principles

1. Compound words should use camelCase to indicate prefixes.

   - "בְּרֵאשִׁ֖ית" = "beReshit"
   - "וְאֵ֥ת הָאָֽרֶץ" - "veEt haAretz"

1. Like Hebrew and Greek, transliterations should not include any additional grammar/punctuation marks unless explicitly present in the original language.

## English-Literal Translation Principles

1. Handle traditionally transliterated words in favor of direct translations (for both traditionally transliterated words and names).

   - "angel" (from the Hebrew "malech" and Greek "angelos") should be consistently translated "messenger"
   - "seraphim" (from the hebrew "seraphim") should be consistently translated "burning_ones"

1. Preserve word distinctions between synonyms.

   - When translating multiple related Hebrew words with different roots, always use different English roots
   - For example, If Hebrew "leviathan" -> "sea_dragon", then Hebrew "tannin" -> "sea_serpent" (different english root, but clearly connected), and Hebrew "nachash" -> "snake" (completely different english root, but clearly related conceptually)

1. Remove filler words and preserve Hebrew word-order.

   - Typical translation of Gen 1:3: "then God said 'Let there be light', and there was light"
   - Transliterated Hebrew: "vaiYomer elohim yehi owr wayHi owr"
   - English-Literal Translation: "And-said, Gods, 'Let_be, light.' And-was, light."
   - Restricts additional english words
   - Preserves the word-order of the Hebrew, even though it reads strangely in English

1. Preserve the direct root in the English.

   - Allow context and usage to reshape the meaning of the specific English words over successive readings
   - Use a 1:1 Hebrew-to-English mapping whenever possible
   - Hebrew transliterated "ruach" should always use "wind" (not "spirit" or "breath") in some form
   - Hebrew transliterated "arum" should always use "shrewd" (not "crafty" or "prudent") in some form

1. Expressly render Hebrew את / et (direct object marker).

   - Use ↳ to mark every direct object that Hebrew marks with את
   - Don't add interpretive markers
   - Let the "strangeness" of some constructions help readers recognize Hebrew's distinct way of expressing relationships

1. Use underscores for single Hebrew words and names translated as English phrases.
   - "Hesed" = "steadfast_love"
   - "Eleazer" = "God_My_Help"
     - "will-inherit, God_My_Help, my-house"
   - "Israel" = "Struggles_With_God"
   - Noah = Rest
     - "God rested Man in the garden"
     - "And he called his name Rest, saying 'At last this one will give us rest'"

## English-Natural Translation Principles

1. Maintain readability while preserving meaning.

   - Balance literal accuracy with natural English expression
   - Ensure the translation remains comprehensible while staying true to the original phrasing

1. Use English word-order.

   - English-Literal Translation: "And-said, Gods, 'Let_be, light.' And-was, light."
   - English-Natural Translation: "And God said, 'Let light be.' And light was."
   - In the data structures this usually means reversing subject-verb order, and moving prefixes like "va-"/"and-" to the subject word

1. Use dashes for underscored Hebrew words and names translated as English phrases.

   - "steadfast_love" -> "seadfast-love"
   - "God_My_Help" -> "God-My-Help"
     - "God-My-Help will inherit my house"
   - "Struggles_With_God" -> "Struggles-With-God"
   - Ideally this should reveal word-plays that involve names. eg. Noah = Rest
     - "God rested Man in the garden"
     - "And he called his name Rest, saying 'At last this one will give us rest.'"

1. Preserve the direct root in English when possible.

   - Like the English-Literal, the root word should be consistently translated, even in strange situations.
   - This is most important for verbs, nouns, and adjectives.
   - Smaller/connective/marker words are allowed more flexibility due to their variety of use and function, especially in the Hebrew.
