import React from "react";

const CustomButton = (props) => {
  const { title, heading, onClick, className} = props;
  return (
    <>
      {heading}
      <button type="button" className={`${className}`} onClick={onClick}>
        {title}
      </button>
    </>
  );
};
export default CustomButton;
