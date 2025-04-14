import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import cx from 'classnames';
import styles from './Dialog.module.css';

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  className?: string;
}

export function Dialog({ open, onOpenChange, children, className }: DialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={styles.overlay} />
        <DialogPrimitive.Content className={cx(styles.content, className)}>
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;
export const DialogClose = DialogPrimitive.Close; 