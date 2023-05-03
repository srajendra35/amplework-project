import React from "react";
import "../EnterpriseMobility.css";
import { Card } from "react-bootstrap";
import { G4, Itreation, Secure, Skill, Trun } from "../../../../assets";

const ExperienanceInnovate = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="innovateheading">
            Experience Innovate Features of Enterprise Mobility Solutions
          </h2>
          <p className="innovatepara">
            We are the leading enterprise mobile app development agency & we
            support companies into transforming their business operations. We
            encourage businesses to adopt advanced mobility solutions so that
            they can travel in the boat of digital transformations.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div>
              <Card className="innovatecard">
                <div>
                  <img src={Skill} alt="" />
                </div>
                <h5 className="cardheading text-white mt-5">
                  5x Efficiency Improvement
                </h5>
                <p className="cardpara text-white mt-2">
                  Our solutions can help improve efficiency by up to 5x times
                  that resulting in reduced costs and increased productivity.
                </p>
              </Card>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6">
                <Card className="innovatecard2 mb-4">
                  <div>
                    <img src={Itreation} alt="" />
                  </div>
                  <h5 className="globalheading text-white mt-3">
                    Global Scale
                  </h5>
                  <p className="globalpara text-white mt-3">
                    Our enterprise mobility solutions can be deployed and scaled
                    globally to meet the needs of your business.
                  </p>
                </Card>
              </div>

              <div className="col-lg-6">
                <Card className="innovatecard3">
                  <div>
                    <img src={Trun} alt="" />
                  </div>
                  <h5 className="globalheading text-white mt-3">
                    Standard Controls
                  </h5>
                  <p className="globalpara text-white mt-3">
                    We utilize standard controls to ensure consistency and
                    usability across all enterprise mobile applications.
                  </p>
                </Card>
              </div>
              <div className="col-lg-6">
                <Card className="innovatecard4">
                  <div>
                    <img src={Secure} alt="" />
                  </div>
                  <h5 className="globalheading text-white mt-3">
                    Zero Downtime
                  </h5>
                  <p className="globalpara text-white mt-3">
                    We ensure zero downtime during the deployment and
                    maintenance of our enterprise mobility solutions.
                  </p>
                </Card>
              </div>
              <div className="col-lg-6">
                <Card className="innovatecard5">
                  <div>
                    <img src={G4} alt="" />
                  </div>
                  <h5 className="globalheading text-white mt-3">
                    Real-Time Analytics
                  </h5>
                  <p className="globalpara text-white mt-3">
                    Our solutions provide real-time analytics to help businesses
                    make data-driven decisions and the competition.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ExperienanceInnovate;
