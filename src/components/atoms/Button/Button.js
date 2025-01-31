import React from "react";
import "./Button.scss";

const Button = ({ children, className = "", onClick, ...props }) => {
  return (
    <button
      className={`${className} button-wrapper`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
