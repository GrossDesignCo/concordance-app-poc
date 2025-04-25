'use client';
import { SettingsProvider } from '@/context/SettingsContext';
import { SelectionProvider } from '@/context/SelectionContext';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';

const Home = () => {
  return (
    <SettingsProvider>
      <SelectionProvider>
        <Main />
        <Header />
      </SelectionProvider>
    </SettingsProvider>
  );
};

export default Home;
