import React from "react";
import "../Softwaremaintenancesupport.css";
import { Card } from "react-bootstrap";
import { RxDotFilled } from "react-icons/rx";
import {
  Devops,
  MointerUpdate,
  Outline,
  Softwareupdatee,
} from "../../../../assets";

const RoleOur = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="role-heading">
            Roles in Our Software Maintenance Teams
          </h2>
          <div className="role-para">
            <p className="col-lg-7 text-center">
              We keep add-on new roles and eliminate obstacle roles for the
              software maintenance. Below mentioned roles are the backbone of
              our software maintenance programs.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <Card className="role-card-1 col-lg-6">
            <h4 className="app">Application Support Engineers</h4>
            <div className="d-flex">
              <ul className="col-lg-10 mt-2">
                <li className="fs-5">
                  <RxDotFilled className="text-primary fs-5" />
                  They monitor technicalities.
                </li>
                <li className="mt-2 fs-5">
                  <RxDotFilled className="text-primary fs-5" />
                  They ensure technical support.{" "}
                </li>
                <li className="mt-2 fs-5">
                  <RxDotFilled className="text-primary fs-5" />
                  Troubleshooting of software functions.
                </li>
                <li className="mt-2 fs-5">
                  <RxDotFilled className="text-primary fs-5" />
                  Providing consultancy to clients.
                </li>
              </ul>
              <div>
                <img src={Softwareupdatee} className="img-fluid" alt="" />
              </div>
            </div>
          </Card>
          <Card className="role-card-2 col-lg-6">
            <h4 className="app">Software Developers</h4>
            <div className="d-flex">
              <ul className="col-lg-10 mt-2">
                <li className="fs-5">
                  <RxDotFilled className="fs-5" />
                  Fixing issues on code and database levels.
                </li>
                <li className="mt-2 fs-5">
                  <RxDotFilled className=" fs-5" />
                  New software components or features.
                </li>
                <li className="mt-2 fs-5">
                  <RxDotFilled className=" fs-5" />
                  Software customizations and integrations.
                </li>
                <li className="mt-2 fs-5">
                  <RxDotFilled className=" fs-5" />
                  Performing unit different unit testing functions.
                </li>
              </ul>
              <div>
                <img src={MointerUpdate} className="img-fluid" alt="" />
              </div>
            </div>
          </Card>
        </div>
        <div className="row  ">
          <Card className="role-card-2 col-lg-6">
            <h4 className="app">DevOps Engineers</h4>
            <div className="d-flex">
              <ul className="col-lg-10 mt-2">
                <li className="fs-5">
                  <RxDotFilled className="fs-5" />
                  Managing physical & virtual services.
                </li>
                <li className="mt-2 fs-5">
                  <RxDotFilled className=" fs-5" />
                  Configuring & optimizing cloud services.
                </li>
                <li className="mt-2 fs-5">
                  <RxDotFilled className=" fs-5" />
                  Solving infrastructure issues.
                </li>
                <li className="mt-2 fs-5">
                  <RxDotFilled className=" fs-5" />
                  Automating the update and evaluation part.
                </li>
              </ul>
              <div>
                <img src={Devops} className="img-fluid" alt="" />
              </div>
            </div>
          </Card>
          <Card className="role-card-1 col-lg-6">
            <h4 className="app">Program Test Engineers</h4>
            <div className="d-flex">
              <ul className="col-lg-10 mt-2">
                <li className="fs-5">
                  <RxDotFilled className="text-primary fs-5" />
                  They conduct manual & automated tests.
                </li>
                <li className="mt-2 fs-5">
                  <RxDotFilled className="text-primary fs-5" />
                  Responsible for testing & validating software.
                </li>
                <li className="mt-2 fs-5">
                  <RxDotFilled className="text-primary fs-5" />
                  Integrate new changes in the software process.
                </li>
                <li className="mt-2 fs-5">
                  <RxDotFilled className="text-primary fs-5" />
                  Responsible for software security operations.
                </li>
              </ul>
              <div>
                <img src={Outline} className="img-fluid" alt="" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};
export default RoleOur;
