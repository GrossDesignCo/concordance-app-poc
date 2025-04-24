import { TranslationWord } from "@/types";
import { createContext, useContext, useState, ReactNode } from "react";

interface RootSelectionContextProps {
  selectedRoot: TranslationWord | null;
  setSelectedRoot: (root: TranslationWord | null) => void;
}

const RootSelectionContext = createContext<
  RootSelectionContextProps | undefined
>(undefined);

export const RootSelectionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedRoot, setSelectedRoot] = useState<TranslationWord | null>(
    null
  );

  return (
    <RootSelectionContext.Provider
      value={{
        selectedRoot,
        setSelectedRoot,
      }}
    >
      {children}
    </RootSelectionContext.Provider>
  );
};

export const useRootSelection = () => {
  const context = useContext(RootSelectionContext);

  if (!context) {
    throw new Error(
      "useRootSelection must be used within a RootSelectionProvider"
    );
  }

  return context;
};
