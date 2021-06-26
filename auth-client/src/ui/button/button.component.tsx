import React from "react";
import "./button.style.scss";

export interface ButtonProps {
  /** Button type input */
  type?: "button" | "submit" | "reset";
  /** Button label */
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ label, type }) => {
  return (
    <div className="button">
      <button type={type}>{label}</button>
    </div>
  );
};

export default Button;
