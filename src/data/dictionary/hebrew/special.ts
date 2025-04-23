interface SpecialElement {
    hebrew: string;
    transliteration: string;
    englishLiteral: string;
    englishNatural: string;
    function: string;
  }
// Special grammar elements
export const specialElements: Record<string, SpecialElement> = {
    directObjectMarker: {
      hebrew: 'אֵת',
      transliteration: 'et',
      englishLiteral: '↳',
      englishNatural: '',
      function: 'direct object marker',
    },
  }; 