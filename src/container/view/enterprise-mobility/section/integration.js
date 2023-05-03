import React from "react";
import "../EnterpriseMobility.css";
import { Overview } from "../../../../assets";

const Integration = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <img src={Overview} width={"100%"} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <h6 className="mobilityample">AMPLEWORK SOFTWARE</h6>
            <h3 className="mobileheading mb-5">
              Amplework’s Profound Enterprise Mobility Integration
            </h3>
            <p className="mobilitypara">
              Amplework Software offers profound enterprise mobility integration
              services to businesses who desires to streamline their process. We
              focus on security, scalability and seamless integration with your
              existing systems. Thus, Amplework's solutions enable businesses to
              increase business efficiency by many folds, enhance collaboration
              and gain a competitive edge in their industry.
            </p>
            <p className="mobilitypara">
              Our integration solutions allow employees to access company data
              and applications from their mobile devices which makes it easier
              to work remotely or on-the-go. Our committed team prioritizes your
              business's unique requirements while providing tailored mobile
              solutions that deliver effortless performance for both your
              customers and employees.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Integration;
