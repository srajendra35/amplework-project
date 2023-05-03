import React from "react";
import "../EnterpriseMobility.css";
import { Card } from "react-bootstrap";
import { FiCheckCircle } from "react-icons/fi";
import { Recommend } from "../../../../assets";

const EngagementalModal = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="engagemental">
            Save Up-To 55% Operational Cost With Our Engagement Model
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <Card className="engcardbg p-4">
              <h4 className="cardengagemental mb-4">
                Hire Enterprise Mobility
                <br /> Developer
              </h4>
              <p className="engagepara">
                With the prowess & knowledge of our developers, you can ask them
                to customize tech-enabled solutions as per your business
                requirements.
              </p>
              <p className="long">
                <span className="text-warning fs-5 p-1">
                  <FiCheckCircle />
                </span>{" "}
                Long-term collaboration
              </p>
              <p className="long">
                <span className="text-warning fs-5 p-1">
                  <FiCheckCircle />
                </span>
                Highly scalable team
              </p>
              <p className="long">
                <span className="text-warning fs-5 p-1">
                  <FiCheckCircle />
                </span>
                Complete control of the team
              </p>
            </Card>
          </div>
          <div className="col-lg-8">
            <p className="engpara">
              Our engagement models are designed to effectively tailor the
              requirements of clients. Through our three engagement model types
              (monthly, hourly & complete term contracts) you can curtail your
              time & resources.
            </p>
            <div className="row mb-5">
              <div className=" col-sm-12 col-md-12 col-lg-6">
                <Card className="p-4 border-0">
                  <h1 className="hourlyeng fw-bold mb-4">
                    $20 <span className="fs-5 text-dark">Hourly</span>
                  </h1>
                  <div className="borderbottom mb-2"></div>
                  <h4 className="hourlyeng">Hourly Plan</h4>
                  <p className="cardparaclients mb-4">
                    Clients can avail of services at any hour of the day as per
                    their requirements.
                  </p>
                  <p className="billingpara">
                    <span className="text-warning fs-5 p-2">
                      <FiCheckCircle />
                    </span>
                    [Billing cycling - Weekly]
                  </p>
                </Card>
              </div>
              <div className=" col-sm-12 col-md-12 col-lg-6">
                <img className="recommendedimg" src={Recommend} alt="" />

                <Card className="cardenter p-4">
                  <h1 className="hourlyeng fw-bold mb-4 text-white">
                    $2500 <span className="fs-5 text-white">Monthly</span>
                  </h1>
                  <div className="borderbottoms mb-2 "></div>
                  <h4 className="hourlyeng text-white">Monthly Plan</h4>
                  <p className="cardparaclients mb-4 text-white">
                    8 hours per day with 5 days in a week approach.
                  </p>
                  <p className="billingpara text-white">
                    <span className="text-white fs-5 p-2">
                      <FiCheckCircle />
                    </span>
                    [Billing cycling - Monthly]
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text-center">
            <button className="buttonengage p-2 text-white">
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default EngagementalModal;
