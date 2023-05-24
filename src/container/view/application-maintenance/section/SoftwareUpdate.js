import React from "react";
import "../ApplicationMaintenance.css";
import SoftwareUpdateCard from "../../../../componects/SoftwareUpdatecard";
import { TbTargetArrow } from "react-icons/tb";
import { FiTarget } from "react-icons/fi";
import { SoftwareUpdateMock } from "../../../../mockup/SoftwareupadteMockup";
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
              industry. Lorem Ipsum has been the industry's
              <br /> standard dummy text ever since the 1500s,
            </p>
          </div>
          <div className="row">
            <div className="bluecard  d-flex flex-wrap justify-content-center">
              {SoftwareUpdateMock.map((item) => (
                <div className="fixed col-lg-4">
                  <SoftwareUpdateCard
                    icon1={item.icon1}
                    icon2={item.icon2}
                    title={item.title}
                    para={item.para}
                    ample={item.ample}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SoftwareUpdate;
