import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ReactNode, useRef, useState, useEffect } from 'react';
import cx from 'classnames';
import styles from './Sheet.module.css';
import { Button } from '../components/Button';
import { X } from '@phosphor-icons/react';

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  className?: string;
  title: string;
  expanded?: boolean;
  maxWidth?: string;
  position?: 'bottom' | 'right';
  pushContent?: boolean;
}

export function Sheet({
  open,
  onOpenChange,
  children,
  className,
  title,
  expanded: initialExpanded = false,
  maxWidth,
  position = 'bottom',
  pushContent = false,
}: SheetProps) {
  const [expanded, setExpanded] = useState(initialExpanded);
  const contentRef = useRef<HTMLDivElement>(null);

  // Reset expanded state when sheet is closed
  useEffect(() => {
    if (!open) {
      setExpanded(initialExpanded);
    }
  }, [open, initialExpanded]);

  // Toggle expanded state when handle is clicked
  const handleToggleExpanded = () => {
    setExpanded(!expanded);
  };

  // Effect to push content when sheet is open (desktop only)
  useEffect(() => {
    if (typeof window === 'undefined' || position !== 'right' || !pushContent)
      return;

    const viewPanelsElement = document.querySelector('[class*="ViewPanels"]');

    if (viewPanelsElement && open) {
      const sheetWidth = maxWidth || '400px';
      viewPanelsElement.setAttribute('style', `margin-right: ${sheetWidth};`);
    } else if (viewPanelsElement && !open) {
      viewPanelsElement.setAttribute('style', '');
    }

    return () => {
      if (viewPanelsElement) {
        viewPanelsElement.setAttribute('style', '');
      }
    };
  }, [open, pushContent, position, maxWidth]);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange} modal={false}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Content
          className={cx(
            styles.content,
            {
              [styles.expanded]: expanded,
              [styles.rightPosition]: position === 'right',
            },
            className
          )}
          ref={contentRef}
          onPointerDownOutside={(e) => e.preventDefault()}
          style={maxWidth ? { maxWidth } : undefined}
        >
          <div className={styles.handle} onClick={handleToggleExpanded}>
            <div className={styles.handleBar} />

            <DialogPrimitive.Title className={styles.title}>
              {title}
            </DialogPrimitive.Title>

            <DialogPrimitive.Close asChild>
              <Button
                variant="ghost"
                size="sm"
                aria-label="Close dialog"
                className={styles.closeButton}
                onClick={() => onOpenChange(false)}
              >
                <X size={20} weight="regular" />
              </Button>
            </DialogPrimitive.Close>
          </div>

          <div className={styles.sheetContent}>{children}</div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export const SheetTitle = DialogPrimitive.Title;
export const SheetDescription = DialogPrimitive.Description;
export const SheetClose = DialogPrimitive.Close;
