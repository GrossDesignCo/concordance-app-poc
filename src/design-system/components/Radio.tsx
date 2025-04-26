import { forwardRef } from 'react';
import { Choice, ChoiceProps } from './Choice';

// Extends ChoiceProps but omits the 'type' property since it's always 'radio'
export type RadioProps = Omit<ChoiceProps, 'type'>;

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  return <Choice {...props} type="radio" ref={ref} />;
});

Radio.displayName = 'Radio';
