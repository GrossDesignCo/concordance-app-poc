'use client';
import TranslationView from '@/components/TranslationView';
import TranslationControls from '@/components/TranslationControls';
import { TranslationProvider } from '@/context/TranslationContext';
import genesis1_1 from '@/data/translation/genesis/genesis-1';

const Home = () => {
  return (
    <TranslationProvider>
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Concordance Project</h1>
        <TranslationControls />
        <TranslationView verse={genesis1_1} />
      </main>
    </TranslationProvider>
  );
};

export default Home;
