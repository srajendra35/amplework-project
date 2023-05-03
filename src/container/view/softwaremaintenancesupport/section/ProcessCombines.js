import React from "react";
import "../Softwaremaintenancesupport.css";
import { Card } from "react-bootstrap";
import { Process1 } from "../../../../assets";

const ProcessCombines = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="process-heading">
            Our Process Combines Quality & Efficiency
          </h2>
          <p className="process-para">
            Our tested process to deliver services in a timely manner by
            maintaining the
            <br /> utmost software quality measures:
          </p>
        </div>
        <div className="row">
          <div className="d-flex flex-wrap justify-content-center">
            <Card className="p-4" style={{ width: "20rem" }}>
              <div className="mb-4 d-flex justify-content-between">
                <div className="bg-danger">
                  <img src={Process1} alt="" />
                </div>

                <h1 className="oneprocess fw-bold">1</h1>
              </div>
              <h5 className="requi mb-4"> </h5>
              <p className="we-para">
                We understand our client’s specific requirements by analyzing
                their business needs and functions.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProcessCombines;
