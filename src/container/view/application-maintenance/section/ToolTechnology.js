import React from "react";
import "../ApplicationMaintenance.css";
import CustomCard from "../../../../componects/customCard/CustomCard";
import { Maintenance } from "../../../../assets";
import { ToolTechnologys } from "../../../../mockup/Tooltechnology";

const ToolTechnology = () => {
  return (
    <>
      <div className="tool">
        <div className="container">
          <div className="exp row">
            <h2 className="experience text-white text-center">
              Experience Unparalleled Excellence with Our Comprehensive
              Application Support and Maintenance
            </h2>
            <p className="our text-white text-center">
              Our advanced mobile application maintenance and support provide a
              comprehensive <br />
              approach to managing and maintaining your applications.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="xyz">
          {ToolTechnologys.map((item) => {
            return (
              <CustomCard
                cardclass={"mointorcard"}
                cardbody="mointor-main"
                imgdivclass={"mointor-in"}
                imgclass="mointor-img"
                headingclass="mointorheading"
                paraclass="mointor-para"
                image={item.image}
                heading={item.heading}
                para={item.para}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ToolTechnology;
