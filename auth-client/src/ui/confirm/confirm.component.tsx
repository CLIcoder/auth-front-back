import React from "react";
import "./confirm.style.scss";

export interface ConfirmProps {
  name: string;
  handleChange: any;
  error: string | boolean;
  label: string;
}

const Confirm: React.FC<ConfirmProps> = ({
  label,
  name,
  error,
  handleChange,
}) => {
  return (
    <div className="confirm">
      <input
        className={error ? "confirm_error" : ""}
        name={name}
        onChange={handleChange}
        type="checkbox"
      />
      <p className={error ? "confirm_error_p" : ""}>{label}</p>
      <br />
    </div>
  );
};

export default Confirm;
