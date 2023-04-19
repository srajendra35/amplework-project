import React from "react";
import "../diverse/diverse.css";
import Angle from "../../assets/Group 13516.png";

import { Card } from "react-bootstrap";
const Diverse = () => {
  return (
    <>
      <div className="diverse">
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <div className="angle">
                <img src={Angle} width="200rem" alt="" />
              </div>
              <h4 className="heading">
                Diverse Levels Of Support Offered
                <br /> By Our Prowess Experts
              </h4>
              <p className="offerpara">
                We offer support for application maintenance at a diverse level
                of
                <br />
                operations to help our clients in accomplishing their specific
                <br />
                goals. If you are confused that which level of support service
                <br />
                will be beneficial for you then you can connect with us to get
                <br />
                valuable insights about operations.
              </p>
              <div className=" col-sm-8 text-end">
                <img src={Angle} width="200rem" alt="" />
              </div>
            </div>
            <div className="col-sm-7 mt-5 d-flex flex wrap justify-content-center justify-content-between">
              <div className="col-sm-5">
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
                <Card className="cardbg">
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
              </div>
              <div className="col-sm-5">
                <Card className=" colorpink mb-4 mt-5">
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
                <Card className="bggreen">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Diverse;
