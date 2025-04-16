# Concordance App

As-yet unnamed proof of concept, using ai to help build a concordance and bible translation in extreme depth.

## Initial Project Docs

https://docs.google.com/document/d/1iDo7oMYmo-_fC3uElog9xpObCq70296WO7Fbbq9WB4I/edit?tab=t.0#heading=h.q4f61gzgaqlz

https://www.figma.com/board/tRWusJ9mtdxKKHiUG44bH3/Initial-Systems-map?node-id=2-17&t=3C5N5StAALDYruSs-0

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Translation Principles

The goal is to create as close to a 1:1 Hebrew:English mapping as possible, even when treating words/concepts in seemingly strange ways to a typical english reader. Ideally over time, this mapping can become both a useful tool to students of scripture and maybe to some degree help bring a familiarity with the biblical mind/conceptualization to English speakers.

### Principles

1. Remove filler words

- Typical translation of Gen 1:3: “then God said ‘Let there be light’, and there was light”
- Actual hebrew: “vaiyomer elohim yehi owr wayhi owr”
- Syntactically literal translation: “And-he-said, God, be, light, and-was, light.”
- More literal translation: “And God said ‘light be.’ and light was.”

2. Remove transliterations

- English “Angel” = Greek “Angelos” = Messenger
- Just translate Angelos as Messenger all the time
- Hebrew “Seraphim”, just translate as “Fire-serpents”

3. Translate names to capture word-play between people and actions

- Noah = Rest
- God rested Man in the garden
- And he called his name Rest (Noah), saying “At last this one will give us rest”

4. Use a 1:1 Hebrew-to-English mapping where possible, even if awkward

- Eg. “Ruach” = “wind” or “breath” or “spirit”. Go with “wind”, and then just render it as wind everywhere ruach is used.
- Allow the context and usage to re-shape the meaning of “wind” in the English reader’s mind over many successive readings.

5. Match the word-complexity where possible

- Eg “Raah”, one syllable, means “bad”
- Instead of translating it as “disaster” or “evil”, just use “bad” always

6. Use dashes when translating a single Hebrew word or name as an English phrase or multiple words

- Eg. “Hesed” = “steadfast-love”
- “Eleazer” = “God-my-help”
- “God-My-Help (Eleazer) will inherit my house”

7. Compound words should also be dashed

- Eg. “beReshit” = “in-beginning”

7. Multiple word phrases in hebrew should not be dashed

- Eg. “Tohu vaVohu” = “Waste and-Void”

9. When translating multiple related words in hebrew that have different roots, always use different english words to preserve the distinction.
10. For prefixes and small grammatical elements:

- Always use dashes to connect inseparable prepositions to their words (be-, le-, ke-, etc.)
- Only include 'the' in translation when הַ (ha-) is actually present in the Hebrew
- Preserve the difference between construct chains (no 'the') and definite nouns (with ha-)"

11. Expressly render את / et. / direct-object-marker

- Keep Hebrew word order
- Use ↳ to mark every direct object that Hebrew marks with את
- Don't add interpretive markers, even for features like totality
- Let the "strangeness" of some constructions help readers recognize Hebrew's distinct way of expressing relationships

12. Note gender/plurality when present in hebrew

- Eg. And-said,(m,s) Gods, 'be light,' - (m,s) = (masculine, singular), which helps counter confusion when reading “Gods” for Elohim
