import React from "react";
import "./input.style.scss";

interface InputProps {
  name: string;
  placeholder: string;
  title: string;
  type: string;
  handleChange: any;
  error: boolean | string;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  title,
  type,
  handleChange,
  error = false,
}) => {
  return (
    <div className="inpt">
      <p>{title}</p>
      <input
        className={error ? "inpt_error" : ""}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
      />
      {error ? <span>{error}</span> : ""}
    </div>
  );
};

export default Input;
