import React from "react";
import { Person } from "../../../../assets";
import { Technology } from "../../../../mockup/Technology";
import CustomButton from "../../../../componects/button/Button";

const TechnicalExperties = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="">
              <img src={Person} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-8">
            <h5 className="text-primary fw-bold mt-5">TECHNOLOGY STACK</h5>
            <h2 className="tech-heading fw-bold mt-3 mb-3">
              Technology Stacks For Maintenance and Support Software
            </h2>

            {Technology.map((item) => {
              return (
                <div className="row">
                  <div className="text-warning col-lg-2 fs-5 p-2">
                    {item.heading}
                  </div>
                  <div className=" col-lg-10 p-2">
                    {item?.btn?.map((items) => (
                      <CustomButton
                        className="button-tech m-1 fs-5"
                        title={items.language}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default TechnicalExperties;
