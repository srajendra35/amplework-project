import React from "react";
import { Card } from "react-bootstrap";
const TypeOfAppCard = (props) => {
  return (
    <>
      <Card className="mointorcard1">
        <Card.Body>
          <div className="monitor1 text-center text-primary">{props.icon}</div>
          <Card.Title className="mointortitle1 text-center">{props.title}</Card.Title>
          <Card.Text className="monitorpara1 text-center text-white">{props.paragrapha}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default TypeOfAppCard;
