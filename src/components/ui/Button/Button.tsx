import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant: "yellow" | "white" | "violet"
  size?: "w-fit" | "w-full";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant,
  size = "w-fit",
  className,
  ...props
}: ButtonProps) {
  return (
    <>
      <button
        className={`${styles.button}
         ${styles[variant]}
          ${styles[size]} ${className}`}
        {...props}
      >
        {children}
        <IoIosArrowForward />
      </button>
    </>
  );
}
