import React from "react";
//styles
import "./link.style.scss";

//component
import { ReactComponent as Back } from "../../asset/back.svg";
import { Link } from "react-router-dom";

interface LinkProps {
  label: string;
}
const Linke: React.FC<LinkProps> = ({ label }) => {
  return (
    <div className="link">
      <Back />
      <Link
        style={{ textDecoration: "none", color: "var(--color-grey-dark-3)" }}
      >
        {label}
      </Link>
    </div>
  );
};

export default Linke;
