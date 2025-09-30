import styles from "./input.module.css";
import React, { forwardRef } from "react";

type InputPrpos = {
  title: string;
  sizeStyles: "w-full" | "w-fit";
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputPrpos>(
  ({ title, sizeStyles = "w-fit", label, className, ...props }, ref) => {
    return (
      <>
        {label && 
        <label className={styles.label}>{label}</label>}
        <input
          className={`${styles.input} ${styles[sizeStyles]} ${className ?? ""}`}
          ref={ref}
          title={title}
          {...props}
        />
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;
