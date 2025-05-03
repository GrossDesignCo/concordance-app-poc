import { Button, Tooltip } from "@/design-system";
import { TextT } from "@phosphor-icons/react";
import { useViewPanels } from "@/context/ViewPanelsContext";

export const ShowLexiconControl = () => {
  const { secondaryPanel, setSecondaryPanel } = useViewPanels();

  return (
    <Tooltip label="Show Lexicon">
      <Button
        aria-label="Show Lexicon"
        variant={secondaryPanel === "lexicon" ? "secondary" : "ghost"}
        onClick={() => setSecondaryPanel("lexicon")}
      >
        <TextT size={20} weight="regular" />
      </Button>
    </Tooltip>
  );
};
