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
            <Card className="brandcard">
              <div>
                <img src={Alpha} alt="" />
              </div>
            </Card>
            <Card className="brandcard">
              <div>
                <img src={soflate} alt="" />
              </div>
            </Card>
            <Card className="brandcard">
              <div>
                <img src={School} alt="" />
              </div>
            </Card>
            <Card className="brandcard ">
              <div>
                <img src={Mapl} alt="" />
              </div>
            </Card>
            <Card className="brandcardlayer">
              <div>
                <img src={Layer} alt="" />
              </div>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-wrap justify-content-center">
            <Card className="brandcard">
              <div>
                <img src={Vista} alt="" />
              </div>
            </Card>
            <Card className="brandcard">
              <div>
                <img src={Wandelwall} alt="" />
              </div>
            </Card>
            <Card className="brandcard">
              <div>
                <img src={Removale} alt="" />
              </div>
            </Card>
            <Card className="brandcard ">
              <div>
                <img src={Cms} alt="" />
              </div>
            </Card>
            <Card className="brandcardmotil">
              <div>
                <img src={Group13} alt="" />
              </div>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-wrap justify-content-center">
            <Card className="brandcard1">
              <div>
                <img src={Guard} alt="" />
              </div>
            </Card>
            <Card className="brandcard1">
              <div>
                <img src={Sweat} alt="" />
              </div>
            </Card>
            <Card className="brandcard1">
              <div>
                <img src={Talk} alt="" />
              </div>
            </Card>
            <Card className="brandcard1 ">
              <div>
                <img src={Rega} alt="" />
              </div>
            </Card>
            <Card className="brandcard2">
              <div>
                <img src={Motil} alt="" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default BrandCollaborated;
