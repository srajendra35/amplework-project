import React from "react";
import "../EnterpriseMobility.css";
import { Card } from "react-bootstrap";
import {
  Alpha,
  Cms,
  Group13,
  Guard,
  Layer,
  Mapl,
  Motil,
  Rega,
  Removale,
  School,
  Sweat,
  Talk,
  Vista,
  Wandelwall,
  soflate,
} from "../../../../assets";
import CustomCard from "../../../../componects/customCard/CustomCard";
import { BrandCollaboratedMock } from "../../../../mockup/BrandcollAbratedMock";

const BrandCollaborated = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="brandheading">Brands we've collaborated with</h2>
          <p className="brandpara">
            Our track record of collaborating with various brands speaks to our
            exceptional process-driven methodology and unparalleled technical
            know-how. You can trust Mindbowser to deliver top-notch results.
          </p>
        </div>
        <div className="row">
          <div className="d-flex flex-wrap justify-content-center">
            {BrandCollaboratedMock.map((item) => (
              <CustomCard
                cardclass="brandcard"
                image={item.image}
                imgclass="brandcoll mt-5"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default BrandCollaborated;
