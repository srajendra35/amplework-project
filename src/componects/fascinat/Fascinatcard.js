import React from "react";
import { Card } from "react-bootstrap";
const FascinatCard = (props) => {
  return (
    <>
      <Card className="bgfascinat mb-5">
        <Card.Body className="longer">
          <div className="d-flex">
            <div className="">
          <Card.Title>{props.title}</Card.Title>
              <Card.Text className="mt-3">{props.para}</Card.Text>
            </div>
            <div className="align-self-center bg-warning">
              <img src={props.img} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default FascinatCard;
