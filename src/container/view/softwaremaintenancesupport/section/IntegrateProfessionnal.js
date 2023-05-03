import React from "react";
import "../Softwaremaintenancesupport.css";
import { RxDotFilled } from "react-icons/rx";
import { vijay } from "../../../../assets";
const IntegrateProfessional = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="intrgate-heading">
            Integrate Professional Software Support and Maintenance Services
          </h2>
          <p className="intgate-para">
            To support our clients, we provide two budget-friendly service
            options for maintenance and <br />
            support of software units. So, check out our service options.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex">
              <div>
                <p className="rxdot text-primary  mt-2">
                  <RxDotFilled className="fs-4" />
                </p>
                <div className="border-bottms"></div>
              </div>
              <div>
                <h4 className="setups">
                  Maintenance and support in Existing Software Setups
                </h4>
              </div>
            </div>
            <p className="after-para">
              After examining the unique features of your software and
              determining your support requirements, we develop a customized
              plan that outlines the entire process. This includes creating a
              setup plan, selecting a suitable sourcing model, building a
              support team and choosing the most appropriate tools to achieve
              the desired outcome.
            </p>
            <div className="d-flex">
              <div>
                <p className="rxdot text-primary mt-2">
                  <RxDotFilled className="fs-4" />
                </p>
              </div>
              <div>
                <h4 className="setups">
                  Outsource software maintenance and support services
                </h4>
              </div>
            </div>

            {/* <h4 className="setups">
              Outsource software maintenance and support services
            </h4> */}
            <p className="after-para">
              Our team takes responsibility for L1/L2, L3/L4 support that
              includes proactive software monitoring to identify and resolve
              issues before they become critical. We also provide infrastructure
              maintenance and support, and we adhere to a detailed service level
              agreement (SLA) to ensure our services meet your needs.
            </p>
          </div>

          <div className="col-lg-6">
            <img src={vijay} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default IntegrateProfessional;
