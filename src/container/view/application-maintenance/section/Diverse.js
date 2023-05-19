import React from "react";
import "../ApplicationMaintenance.css";
import Angle from "../../../../assets/Group 13516.png";

import { Card } from "react-bootstrap";
import { DiverseMockup } from "../../../../mockup/DiverseMockup";

const Diverse = (props) => {
  const { cardclass } = props;
  return (
    <>
      <div className="diverse">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6 ">
              <div className="angle">
                <img src={Angle} width="10%" alt="" />
              </div>
              <h4 className="heading">
                Diverse Levels Of Support Offered By Our Prowess Experts
              </h4>
              <p className="offerpara">
                We offer support for application maintenance at a diverse level
                of operations to help our clients in accomplishing their
                specific goals. If you are confused that which level of support
                service will be beneficial for you then you can connect with us
                to get valuable insights about operations.
              </p>

              <img src={Angle} width="10%" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="row">
                {DiverseMockup.map((item) => (
                  <div className="col-lg-6 p-3">
                    <Card className={`${item.cardclass} p-2 w-100% h-100`}>
                      <Card.Body>
                        <Card.Title className="fs-5">{item.heading}</Card.Title>

                        <Card.Text className="fs-5">{item.title}</Card.Text>
                        {item?.para?.map((items) => (
                          <li className="listyle">{items.li}</li>
                        ))}
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Diverse;
