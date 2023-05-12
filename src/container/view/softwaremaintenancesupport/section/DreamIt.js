import React from "react";
import "../Softwaremaintenancesupport.css";
import CustomCard from "../../../../componects/customCard/CustomCard";
import { Dream } from "../../../../mockup/Dream";
const DreamIt = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="dream-heading">Dream it, We'll Build it</h2>
          <div className="justify-content-center d-flex">
            <p className="col-lg-10 dream-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
          </div>
        </div>
        <div className="dream-card">
          {Dream.map((item) => {
            return (
              <CustomCard
                cardclass="dream-main-card"
                image={item.image}
                heading={item.heading}
                headingclass="dream"
                para={item.para}
                paraclass="dreampara"
                para1={item.para1}
                para2={item.para2}
                para3={item.para3}
                para4={item.para4}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default DreamIt;
