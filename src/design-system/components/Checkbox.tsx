import { forwardRef } from 'react';
import { Choice, ChoiceProps } from './Choice';

// Extends ChoiceProps but omits the 'type' property since it's always 'checkbox'
export interface CheckboxProps extends Omit<ChoiceProps, 'type'> {
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    return <Choice {...props} type="checkbox" ref={ref} />;
  }
);

Checkbox.displayName = 'Checkbox';
