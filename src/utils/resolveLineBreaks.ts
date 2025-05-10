import { LineBreak, WordOrderKey } from "@/types";

export const resolveLineBreaks = (lineBreaks?: LineBreak, wordOrderKey?: WordOrderKey) => {
  if (typeof lineBreaks === 'number') {
    return lineBreaks;
  }

  if (typeof lineBreaks === 'object' && wordOrderKey) {
    return lineBreaks[wordOrderKey] ?? 0;
  }

  return 0;
};
