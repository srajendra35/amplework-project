import React from "react";
import './PrimaryText.css' 
const PrimaryText = (props) => {
  const { heading, className } = props;
  return (
    <>
      <h2 className={`${className} headingclass`}>{heading}</h2>
    </>
  );
};
export default PrimaryText;
