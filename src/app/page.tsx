"use client";
import { SettingsProvider } from "@/context/SettingsContext";
import { SelectionProvider } from "@/context/SelectionContext";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { LexiconProvider } from "@/context/LexiconContext";

const Home = () => {
  return (
    <SettingsProvider>
      <SelectionProvider>
        <LexiconProvider>
          <Main />
          <Header />
        </LexiconProvider>
      </SelectionProvider>
    </SettingsProvider>
  );
};

export default Home;
