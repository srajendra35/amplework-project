import React from "react";
import "../ApplicationMaintenance.css";
import CustomCard from "../../../../componects/customCard/CustomCard";
import { BusinessMock } from "../../../../mockup/BusinessMock";

const Business = () => {
  return (
    <>
      <div className="business">
        <div className="container">
          <div className="row">
            <h4 className="busihaeding">
              Our Numbers Speaks For Our Business Operations
            </h4>
            <p className="busipara">
              We don’t compromise on the quality aspects thus it makes us the
              leading application development maintenance and
              <br /> support service provider. We resolve even the most severe
              incidents in less than 8 hours.
            </p>
          </div>
          <div className="businesscard">
            {BusinessMock.map((item) => (
              <CustomCard
                cardclass={"busi-card"}
                heading={item.heading}
                headingclass={"titlecolor fw-bolder text-center"}
                para={item.para}
                paraclass={"title"}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Business;
