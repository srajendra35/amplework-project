import React from "react";
import "../Softwaremaintenancesupport.css";
import { Card } from "react-bootstrap";
import { ProcessCombinesmockup } from "../../../../mockup/processCombinesmock";

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
            {ProcessCombinesmockup.map((item) => (
              <Card className="process-bgcolor p-4">
                <div className="mb-4 d-flex justify-content-between">
                  <img src={item.image} alt="" />

                  <div>
                    <h1 className="oneprocess fw-bold ">{item.title}</h1>
                  </div>
                </div>
                <h5 className="requi mb-4">{item.heading}</h5>
                <p className="we-para">{item.para}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProcessCombines;
