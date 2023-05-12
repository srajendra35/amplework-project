import React from "react";
import "../ApplicationMaintenance.css";
import { Img1, Img2, Img3, Img4, Img5, Img6 } from "../../../../assets";
import CustomCard from "../../../../componects/customCard/CustomCard";
import { Fascinatcard } from "../../../../mockup/Fascinat";

const Fascinat = () => {
  return (
    <>
      <div className="fascinat">
        <div className="container">
          <div className="row">
            <h4 className="fasci text-center">
              Fascinating Benefits of Application Maintenance and Support
              Services
            </h4>
            <p className="timepara">
              Time to empower your mind with the fascinating benefits of
              application maintenance and support services.
              <br />
              So, get ready to empower your mobile application growth with these
              foremost benefits.
            </p>
          </div>
          <div className="fascinat-card">
            {Fascinatcard.map((item) => {
              return (
                <CustomCard
                  cardclass="fascinatcard1"
                  headingclass="fascinatheading"
                  paraclass="fascinatpara"
                  imgclass="fascinat-img"
                  cardbody="fascinat-body"
                  image={item.image}
                  heading={item.heading}
                  para={item.para}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Fascinat;
