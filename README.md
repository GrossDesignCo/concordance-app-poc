# LexiChi - Name TBD

One of the biggest challenges in studying the Bible is bridging the gap between the original writing of the authors and the context of the modern English reader.

What follows is a deep study of language, and an attempt to bridge that gap.

## Meditation Literature

Scripture is not designed to be read once, or twice, or even seven times through. It’s designed as a lifelong pursuit, like a mine that never runs out, or a well that never runs dry. No mere human will ever reach the end of it during their mortal lifetime. Like the saints before me I’ve found this to be true that the more I dig into the word, the deeper it reveals itself to be.

### The Expanding Language

Genesis starts with the simplest of language, a limited vocabulary easy enough for a child to learn. As the narrative progresses new words & ideas are introduced, slowly recoloring and adding depth, nuance to the early words. Over time these words begin to cluster around certain themes and build connections in the mind, creating, for lack of a better word, a language-model that we use to understand the world. Unlike all other models the biblical model is more nuanced, and provides us with a depth of imagery from which to draw on in our daily walks.

### This Project

Somewhere in-between all the different translation efforts of all the different groups of people, an appreciation for the language itself has been, for now at least, forgotten. The Hebrew, Aramaic, and Greek languages were superseded in the English-speaking world by The King James Translation, and English itself was changed forever.

This project aims to:

1. Preserve the original root for every word translated, consistently using that word and only that word throughout the text to make the connections and literary patterns the authors used shine.
2. Provide a concrete lexicon demonstrating the semantic range of each word through it’s direct usage, allowing a reader to intuitively grasp from context what scripture means when it says something

## Initial Project Docs

https://docs.google.com/document/d/1iDo7oMYmo-_fC3uElog9xpObCq70296WO7Fbbq9WB4I/edit?tab=t.0#heading=h.q4f61gzgaqlz

https://www.figma.com/board/tRWusJ9mtdxKKHiUG44bH3/Initial-Systems-map?node-id=2-17&t=3C5N5StAALDYruSs-0

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Initial Project Structure

1. Data - translation for references, lexicon entries for in-depth word breakdowns
2. App - React UI showing translation and lexicon data

## Roadmap

### Data / Translation

Lots of raw translation work needed. To my knowledge no other bible translation has ever attempted to handle the consistency-of-root-words approach, so a significant amount of human effort is required.

### Data / Lexicon Entries

The AI will be able to generate basic entries explaining word usage based on the reference template and example/reference entries, but over time these will need plenty of human review, editing, and expansion to become genuinely useful.

### Architecture

This project will need to handle >20,000 root words, >700,000 total words, and some number of lexicon entries between or above those numbers as folks use and generate new ones.

This will necessitate a couple structural changes from this PoC:

1. Separate data and UI repos.

- Data/Server will live in an independent repo, service a database, then asynchronously commit data to a git repo for long-term archiving/editing
- UI/Client app will live in it's own repo, provide a local interface, and support offline usage via an optional client-side db/download and PWC system
