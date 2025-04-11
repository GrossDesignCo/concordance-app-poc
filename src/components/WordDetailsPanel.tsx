import { TranslationWord } from '@/types';
import dynamic from 'next/dynamic';
import styles from './WordDetailsPanel.module.css';

interface WordDetailsPanelProps {
  className: string;
  word: TranslationWord | null;
  onClose: () => void;
}

// function MorphologyDisplay({ morphology }: { morphology: any }) {
//   if (!morphology) return null;

//   return (
//     <div className="space-y-1">
//       {Object.entries(morphology).map(([key, value]) => (
//         <div key={key} className="flex items-center text-sm">
//           <span className="text-gray-500 w-24">{key}:</span>
//           <span className="font-medium">{value}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

export default function WordDetailsPanel({
  className,
  word,
}: // onClose,
WordDetailsPanelProps) {
  if (!word) return null;

  // const entry = import(
  //   `../data/concordance/hebrew/${word.transliteration}.mdx`
  // );

  const Entry = dynamic(
    () => import(`../data/concordance/hebrew/${word.transliteration}.mdx`),
    {
      loading: () => <p>Loading...</p>,
      ssr: false,
    }
  );

  return (
    <div className={[className, styles.WordDetailsPanel].join(' ')}>
      {Entry && <Entry />}

      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Word Details</h2>
        {/* <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close panel"
        >
          <svg className="w-5 h-5" viewBox="0 0 21 21">
            <g
              fill="none"
              fillRule="evenodd"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15.5 15.5l-10-10zM15.5 5.5l-10 10" />
            </g>
          </svg>
        </button> */}
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Hebrew */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-500">Hebrew</h3>
          <p className="text-3xl font-hebrew">{word.hebrew}</p>
        </div>

        {/* Transliteration */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-500">Transliteration</h3>
          <p className="text-xl">{word.transliteration}</p>
        </div>

        {/* Translation */}
        {/* <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-500">Translation</h3>
          <div className="space-y-1">
            <p>
              <span className="text-gray-500">Literal: </span>
              <span className="font-medium">{word.englishLiteral}</span>
            </p>
            <p>
              <span className="text-gray-500">Natural: </span>
              <span className="font-medium">{word.englishNatural}</span>
            </p>
          </div>
        </div> */}

        {/* Root */}
        {/* {word.root && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500">Root</h3>
            <p className="font-hebrew text-xl">{word.root}</p>
          </div>
        )} */}

        {/* Prefixes */}
        {/* {word.prefixes && word.prefixes.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500">Prefixes</h3>
            <div className="flex gap-2">
              {word.prefixes.map((prefix, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 rounded font-hebrew"
                >
                  {prefix}
                </span>
              ))}
            </div>
          </div>
        )} */}

        {/* Morphology */}
        {/* {word.morphology && (
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-500">Morphology</h3>
            <MorphologyDisplay morphology={word.morphology} />
          </div>
        )} */}

        {/* Word Order */}
        {/* <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-500">Word Order</h3>
          <div className="space-y-1">
            <p>
              <span className="text-gray-500">Hebrew: </span>
              <span className="font-medium">{word.order.hebrew}</span>
            </p>
            {word.order.english && (
              <p>
                <span className="text-gray-500">English: </span>
                <span className="font-medium">{word.order.english}</span>
              </p>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
}
