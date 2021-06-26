import React from "react";

import "./heading.style.scss";

interface HeadingProps {
  label: string;
  size?: "big" | "small" | "medium";
}

const Heading: React.FC<HeadingProps> = ({ label, size = "big" }) => {
  return (
    <div className="heading">
      <h1 className={`heading_${size}`}>{label}</h1>
    </div>
  );
};

export default Heading;
