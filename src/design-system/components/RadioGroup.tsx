import { ReactNode } from "react";
import styles from "./RadioGroup.module.css";

interface RadioGroupProps {
  label: string;
  children: ReactNode;
}

export const RadioGroup = ({ label, children }: RadioGroupProps) => {
  return (
    <fieldset className={styles.radioGroup}>
      <legend className={styles.legend}>{label}</legend>
      {children}
    </fieldset>
  );
};
