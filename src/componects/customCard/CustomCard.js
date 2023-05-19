import React from "react";
import { Card } from "react-bootstrap";
const CustomCard = (props) => {
  const {
    cardclass,
    imgclass,
    paraclass,
    image,
    heading,
    headingclass,
    para,
    img,
    cardbody,
    icon,
    para1,
    para2,
    para3,
    para4,
    imgfirst,
    li,
  } = props;
  return (
    <Card className={`${cardclass}`}>
      <Card.Body className={`${cardbody}`}>
        <div className={`${imgfirst}`}>
          <div className={`${imgclass}`}>
            <img src={image} className={`${img}`} alt="" />
            {icon}
          </div>
        </div>
        <div>
          <h5 className={`${headingclass}`}>{heading}</h5>
          <div className={`${paraclass}`}>
            <p>{para}</p>
            <p>{para1}</p>
            <p>{para2}</p>
            <p>{para3}</p>
            <p>{para4}</p>
          </div>
        </div>
        <ul>
          <li>{li}</li>
        </ul>
      </Card.Body>
    </Card>
  );
};
export default CustomCard;
