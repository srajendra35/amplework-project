import React from "react";
import { CardGroup } from "react-bootstrap";
import { FiMonitor } from "react-icons/fi";
import "../ApplicationMaintenance.css";
import CustomButton from "../../../../componects/button/Button";
import CustomCard from "../../../../componects/customCard/CustomCard";
import { CardMock } from "../../../../mockup/CustomCard";
const Application = () => {
  return (
    <>
      <div className="mt-5">
        <div className="container text-center">
          <h4 className="ours mb-4">
            Our Advanced Application Support Service-Elevate Your Application,s
            Performance
          </h4>
          <p className="text mb-4">
            complex Applications Which Are Configured With The Latest ApIs
            Require The Advanced Solutions To Keep The Working Mechanism
            <br /> Of The Applications In A Perfect Shape At Amplework
          </p>
          <CardGroup>
            {CardMock.map((items) => {
              return (
                <CustomCard
                  icon={<FiMonitor className="fs-1  mb-2" />}
                  cardclass="appli-bg-color"
                  heading={items.heading}
                  headingclass="appliactionheading"
                  para={items.para}
                  paraclass="appliactonpara"
                />
              );
            })}
          </CardGroup>
          <CustomButton title="Get a Free Quote" className={"get-a-free"} />
        </div>
      </div>
    </>
  );
};
export default Application;
