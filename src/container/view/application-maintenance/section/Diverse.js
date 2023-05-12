import React from "react";
import "../ApplicationMaintenance.css";
import Angle from "../../../../assets/Group 13516.png";

import { Card } from "react-bootstrap";
const Diverse = () => {
  return (
    <>
      <div className="diverse">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-4 ">
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

            <div className="col-sm-12 col-lg-4 mt-5">
              <Card className="mb-4 bg-primary text-white">
                <Card.Body>
                  <Card.Title>Level 1</Card.Title>
                  <Card.Text>Covers Basic App Services</Card.Text>
                  <li>Consists of technical information.</li>
                  <li>Basic system maintenance.</li>
                  <li>Basic bug fixes.</li>
                  <li>Troubleshooting. </li>
                  <li>Basic security maintenance.</li>
                </Card.Body>
              </Card>
              <Card className="cardblue">
                <Card.Body>
                  <Card.Title>Level 2</Card.Title>
                  <Card.Text>Comprehensive Maintenance</Card.Text>
                  <li>Configuration Management.</li>
                  <li>Basic Documentation. </li>
                  <li>Basic Testing. </li>
                  <li>Problem Management. </li>
                  <li> Advance Bug Fixes.</li>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-12 col-lg-4 mt-5">
              <Card className="colorpink mb-4 mt-5">
                <Card.Body>
                  <Card.Title>Level 3</Card.Title>
                  <Card.Text>Advanced Support Services </Card.Text>
                  <li>Performance Tuning.</li>
                  <li>Advanced Testing. </li>
                  <li>Advanced Documentation. </li>
                  <li>Release Management. </li>
                  <li>Advanced Bug Fixes. </li>
                </Card.Body>
              </Card>
              <Card className="bggreen">
                <Card.Body>
                  <Card.Title>Level 4</Card.Title>
                  <Card.Text> Specialized Support Services</Card.Text>
                  <li> Root Cause Analysis.</li>
                  <li>Database Administration. </li>
                  <li>Architecture Design. </li>
                  <li>Secure Operations. </li>
                  <li> Personalized Solutions.</li>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Diverse;
