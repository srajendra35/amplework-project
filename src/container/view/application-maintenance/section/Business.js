import React from "react";
import "../ApplicationMaintenance.css";
import { Card } from "react-bootstrap";
import CustomCard from "../../../../componects/customCard/CustomCard";
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
              leading application development maintenance and<br/> support service
              provider.
               We resolve even the most severe incidents in less than 8
              hours.
            </p>
          </div>
          <div className="businesscard">
            <CustomCard
              cardclass={"busi-card"}
              heading={"10-15 Mins"}
              headingclass={"titlecolor fw-bolder text-center"}
              para={"Minimum incident Response Time"}
              paraclass={"title"}
            />
             <CustomCard
              cardclass={"busi-card"}
              heading={"2-3 Hours"}
              headingclass={"titlecolor fw-bolder text-center"}
              para={"incident Solution Time "}
              paraclass={"title"}
            />
               <CustomCard
              cardclass={"busi-card"}
              heading={"350+"}
              headingclass={"titlecolor fw-bolder text-center"}
              para={"Prowess Team Members "}
              paraclass={"title"}
            />
             <CustomCard
              cardclass={"busi-card"}
              heading={"100%"}
              headingclass={"titlecolor fw-bolder text-center"}
              para={" With Quality Optimization "}
              paraclass={"title"}
            />

 

          
          </div>
        </div>
      </div>
    </>
  );
};
export default Business;
