import React from "react";
import "../Softwaremaintenancesupport.css";
import { Card } from "react-bootstrap";
import {
  Analysis,
  Maintenance1,
  News,
  Process1,
  Speedtest1,
  Warning,
  Webmaintenance,
} from "../../../../assets";

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
            <Card className="process-bgcolor p-4">
              <div className="mb-4 d-flex justify-content-between">
                <div className="">
                  <img className="process img-fluid" src={Warning} alt="" />
                </div>
                <div>
                  <h1 className="oneprocess fw-bold ">1</h1>
                </div>
              </div>
              <h5 className="requi mb-4">Program Analysis</h5>
              <p className="we-para">
                Existing infrastructure is required to analyze for identifying
                vulnerabilities and key areas for improvement.
              </p>
            </Card>
            <Card className="process-bgcolor p-4">
              <div className="mb-4 d-flex justify-content-between">
                <div className="process">
                  <img className="process" src={Analysis} alt="" />
                </div>

                <h1 className="oneprocess fw-bold">2</h1>
              </div>
              <h5 className="requi mb-4">Requirement Collection</h5>
              <p className="we-para">
                We understand our client’s specific requirements by analyzing
                their business needs and functions.
              </p>
            </Card>
            <Card className="process-bgcolor p-4">
              <div className="mb-4 d-flex justify-content-between">
                <div className="process">
                  <img className="process" src={Webmaintenance} alt="" />
                </div>

                <h1 className="oneprocess fw-bold">3</h1>
              </div>
              <h5 className="requi mb-4">Maintenance Proposal</h5>
              <p className="we-para">
                Our team creates a proposal for the maintenance work required
                based on the findings of the program analysis.
              </p>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-wrap justify-content-center">
            <Card className="process-bgcolor p-4">
              <div className="mb-4 d-flex justify-content-between">
                <div className="process">
                  <img src={Maintenance1} alt="" />
                </div>

                <h1 className="oneprocess fw-bold">4</h1>
              </div>
              <h5 className="requi mb-4">Team Operations</h5>
              <p className="we-para">
                Our team incorporates the use of latest programming languages &
                frameworks with the latest APIs to design.
              </p>
            </Card>
            <Card className="process-bgcolor p-4">
              <div className="mb-4 d-flex justify-content-between">
                <div className="process">
                  <img src={Speedtest1} alt="" />
                </div>

                <h1 className="oneprocess fw-bold">5</h1>
              </div>
              <h5 className="requi mb-4">Testing Applications</h5>
              <p className="we-para">
                Before releasing, our team members conduct automation as well as
                manual testing of the application.
              </p>
            </Card>
            <Card className="process-bgcolor p-4">
              <div className="mb-4 d-flex justify-content-between">
                <div className="process">
                  <img src={News} alt="" />
                </div>

                <h1 className="oneprocess fw-bold">6</h1>
              </div>
              <h5 className="requi mb-4">Release and Reporting</h5>
              <p className="we-para">
                Once the maintenance work is completed then the application has
                been tested before being.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProcessCombines;
