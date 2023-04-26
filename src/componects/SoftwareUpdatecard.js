import React from "react";
import { Card } from "react-bootstrap";
const SoftwareUpdateCard = (props) => {
  return (
    <>
      <Card className="bgcolors">
        <Card.Body>
          <div className="arow text-center">{props.icon}</div>
          <Card.Title className="text-center text-danger">
            {props.title}
          </Card.Title>
          <Card.Text className="soft text-center">{props.para}</Card.Text>
          <Card.Text className="text-center text-primary">{props.ample}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default SoftwareUpdateCard;
