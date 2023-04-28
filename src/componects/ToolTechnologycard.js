import React from "react";
import { Card } from "react-bootstrap";

const ToolTechnologyCard = (props) => {
  return (
    <>
      <Card className="mointorcard">
        <Card.Body>
          <div className="
          moniter fs-1 mb-4 text-center">{props.icon}</div>
          <Card.Title className="mointortitle1 text-center">
            {props.title}
          </Card.Title>
          <Card.Text className="monitorpara1 text-center">
            {props.paragrapha}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default ToolTechnologyCard;
