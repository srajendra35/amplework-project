import React from "react";
import { Card } from "react-bootstrap";

const ToolTechnologyCard = (props) => {
  return (
    <>
      <Card className="mointorcard">
        <Card.Body>
          <div className="monitor text-center text-primary">{props.icon}</div>
          <Card.Title className="mointortitle text-center">
            {props.title}
          </Card.Title>
          <Card.Text className="monitorpara text-center">
            {props.paragrapha}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default ToolTechnologyCard;
