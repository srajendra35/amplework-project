import React from "react";
import "../Softwaremaintenancesupport.css";
import { Card } from "react-bootstrap";
import {
  Carbg,
  Code,
  Customer,
  Growth,
  Mobiletech,
  Surface,
} from "../../../../assets";
const Accomplish = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="accomplish-heading">
            Accomplish Results With Top Software Maintenance Company
          </h2>
          <p className="accomplish-para">
            Build stable applications with custom software maintenance services
            that results into 100%
            <br /> business efficiency while enhancing the functionalities.
          </p>
        </div>
        <div className="row">
          <div className="d-flex flex-wrap justify-content-center">
            <Card
              style={{ width: "25rem", height: "18rem" }}
              className="departmentalhover m-2"
            >
              <Card.Body className="text-center">
                <div className="defaulttransport">
                  <div className="transimageblock">
                    <img src={Code} alt="" className="img-fluid p-2" />
                  </div>
                </div>
                <div className="stableheading">
                  <h5 className="stable"> Secure & Stable Running of Apps</h5>
                </div>

                <div className="departmental-hover-para fs-5">
                  <p>
                    We ensure the secure and stable operations of applications
                    that are essential to prevent data breaches & maintain user
                    confidence.
                  </p>
                </div>
              </Card.Body>
            </Card>
            <Card
              style={{ width: "25rem", height: "18rem" }}
              className="departmentalhover m-2"
            >
              <Card.Body className="text-center">
                <div className="defaulttransport">
                  <div className="transimageblock">
                    <img src={Mobiletech} alt="" className="img-fluid p-2" />
                  </div>
                </div>
                <h5 className="">Eliminate Issues of Application Downtime</h5>
                <div className="departmental-hover-para ">
                  <p>
                    Downtime issues enhance the user attrition rate - so we
                    incorporate specific solutions to eliminate downtime issues.
                  </p>
                </div>
              </Card.Body>
            </Card>
            <Card
              style={{ width: "25rem", height: "18rem" }}
              className="departmentalhover m-2"
            >
              <Card.Body className="text-center">
                <div className="defaulttransport">
                  <div className="transimageblock">
                    <img src={Growth} alt="" className="img-fluid p-2" />
                  </div>
                </div>
                <h5 className="">High-Performance Applications</h5>
                <div className="departmental-hover-para">
                  <p>
                    We fix bugs & vulnerabilities by upgrading specific key
                    components to tune applications into high-performance output
                    generation.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-wrap justify-content-center">
            <Card
              style={{ width: "25rem", height: "18rem" }}
              className="departmentalhover m-2"
            >
              <Card.Body className="text-center">
                <div className="defaulttransport">
                  <div className="transimageblock">
                    <img src={Surface} alt="" className="img-fluid p-2" />
                  </div>
                </div>
                <h5 className="">Feature Customization</h5>
                <div className="departmental-hover-para">
                  <p>
                    Software maintenance helps with feature customization by
                    adding new features and customizing existing ones.
                  </p>
                </div>
              </Card.Body>
            </Card>
            <Card
              style={{ width: "25rem", height: "18rem" }}
              className="departmentalhover m-2"
            >
              <Card.Body className="text-center">
                <div className="defaulttransport">
                  <div className="transimageblock">
                    <img src={Customer} alt="" className="img-fluid p-2" />
                  </div>
                </div>
                <h5 className="">Improved User Experience</h5>
                <div className="departmental-hover-para">
                  <p>
                    Consistent maintenance ensures to improves the user
                    experience, reliability & higher performance through timely
                    support.
                  </p>
                </div>
              </Card.Body>
            </Card>
            <Card
              style={{ width: "25rem", height: "18rem" }}
              className="departmentalhover m-2"
            >
              <Card.Body className="text-center">
                <div className="defaulttransport">
                  <div className="transimageblock">
                    <img src={Carbg} alt="" className="img-fluid p-2" />
                  </div>
                </div>
                <h5 className="">Better Compatibility</h5>
                <div className="departmental-hover-para">
                  <p>
                    Improve compatibility by ensuring the application for
                    working seamlessly across different platforms & devices.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default Accomplish;
