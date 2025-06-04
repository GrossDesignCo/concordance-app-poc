import { createContext, useContext, useState, ReactNode } from 'react';

interface ViewPanelsContextProps {
  secondaryPanel: SecondaryPanel;
  setSecondaryPanel: (value: SecondaryPanel) => void;
}

const ViewPanelsContext = createContext<ViewPanelsContextProps | undefined>(
  undefined
);

export type SecondaryPanel = null | 'lexicon' | 'settings' | 'scriptureNav';

export const ViewPanelsProvider = ({ children }: { children: ReactNode }) => {
  const [secondaryPanel, setSecondaryPanel] = useState<SecondaryPanel>(null);

  // Only allow one panel to be open at a time,
  // if the user selects the same control again, de-activate it
  const handleSetSecondaryPanel = (panel: SecondaryPanel) => {
    setSecondaryPanel((prev) => (panel === prev ? null : panel));
  };

  return (
    <ViewPanelsContext.Provider
      value={{
        secondaryPanel,
        setSecondaryPanel: handleSetSecondaryPanel,
      }}
    >
      {children}
    </ViewPanelsContext.Provider>
  );
};

export const useViewPanels = () => {
  const context = useContext(ViewPanelsContext);
  if (context === undefined) {
    throw new Error('useViewPanels must be used within a ViewPanelsProvider');
  }
  return context;
};
