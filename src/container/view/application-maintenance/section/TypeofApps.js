import React from "react";
import "../ApplicationMaintenance.css";
import CustomCard from "../../../../componects/customCard/CustomCard";
import { TypeofApp } from "../../../../mockup/TypeofApp";
const TypeOfApps = () => {
  return (
    <>
      <section className="section-6">
        <div className="container">
          <div className="row">
            <h6 className="keep text-center">
              Keep Your Applications Always Shine
            </h6>
            <h4 className="types text-center">
              Types of Apps We Maintain At Amplework Software
            </h4>
            <p className="lorem text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
              <br /> standard dummy text ever since the 1500s,
            </p>
          </div>
          <div className="typeofapps">
            {TypeofApp.map((item) => {
              return (
                <CustomCard
                  icon={item.icon}
                  cardclass="typecard"
                  heading={item.heading}
                  cardbody="typetext"
                  imgclass="type-img"
                  headingclass="typeheading"
                  para={item.para}
                  paraclass="type-para"
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default TypeOfApps;
