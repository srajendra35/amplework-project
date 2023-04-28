import React from "react";
import { Card } from "react-bootstrap";
 
 
const ApplicationCard = (props) => {
  return (
    <>
      <Card style={{ backgroundColor: `${props.backgroundColor}`}}>
        <p className="fs-1 text-white text-start px-5">{props.icon}</p>
        <p className="fw-bold  text-start  text-white px-5">{props.heading}</p>

        <div>
          <p className="text-start px-5 text-white">{props.paragrapha}</p>
        </div>
      </Card>
    
    </>
  );
};
export default ApplicationCard;