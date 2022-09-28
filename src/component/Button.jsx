import React from "react";

const Button = (props) => {
  const { buttonText } = props;
  return (
    <div className="container_button">
      <button>{buttonText}</button>
    </div>
  );
};

export default Button;
