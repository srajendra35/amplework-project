import React from "react";
import "../softwareupdate/softwareupdate.css";
import SoftwareUpdateCard from "./SoftwareUpdatecard";
import { TbTargetArrow } from "react-icons/tb";
import { FiTarget } from "react-icons/fi";
const SoftwareUpdate = () => {
  return (
    <>
      <div className="software">
        <div className="container">
          <div className="row">
            <h4 className="lets text-center">
              Let's get your app in shape - contact us now and let the
              maintenance magic begin
            </h4>
            <p className="ipsum text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's<br/> standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="row">
            <div className="bluecard  d-flex flex-wrap justify-content-center">
              <div className="fixed col-sm-12 col-md-6 col-lg-4">
                <SoftwareUpdateCard
                  icon={<TbTargetArrow />}
                  title="Fixed"
                  para="Our in-house support matrix and best-in-industry prices will resultant in cost reduction by 30% to 40%."
                />
              </div>
              <div className="fixed col-sm-12 col-md-6 col-lg-4">
                <SoftwareUpdateCard
                  icon={<FiTarget />}
                  title="Issue"
                  para="Slow and glitch software updates with no-real benefits for users?"
                  ample='Amplework’s Solution'
                />
              </div>
              <div className="fixed col-sm-12  col-md-6 col-lg-4">
                <SoftwareUpdateCard
                  icon={<FiTarget />}
                  title="Issue"
                  para="Need profound resources for program visibility?"
                  ample='Amplework’s Solution'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SoftwareUpdate;
