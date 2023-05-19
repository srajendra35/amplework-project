import React, { useState } from "react";
import { Card } from "react-bootstrap";
const SoftwareUpdateCard = (props) => {
  const{icon1,icon2}=props;

  const[state,setstate]=useState(false);
  
  
 
  return (
    <>
      <Card className="bgcolors"
      onMouseOver={()=>setstate(true)}
      onMouseOut={()=>setstate(false)}
      >
        <Card.Body>
          <div className="arow text-center">{state?icon1:icon2}</div>
          <Card.Title className="text-center text-danger">
          {state?'Fixed':'Issue'}
            {/* {props.title} */}
          </Card.Title>
          <Card.Text className="soft text-center">{props.para}</Card.Text>
          <Card.Text className="text-center text-primary">
            {props.ample}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default SoftwareUpdateCard;
