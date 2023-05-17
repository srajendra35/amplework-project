import React from "react";
import "../ApplicationMaintenance.css";

import { Button, Card } from "react-bootstrap";
import { AiContent, Developer, Mvp } from "../../../../assets";
import CustomButton from "../../../../componects/button/Button";
import { DigitalizeMock } from "../../../../mockup/DigitalizeMock";
import CustomCard from "../../../../componects/customCard/CustomCard";

const Digitalize = () => {
  return (
    <>
      <div className="digitalize">
        <div className="container">
          <div className="row">
            <h4 className="digit mb-5">
              Digitalize Your Product Idea - Learn More About MVP
            </h4>
          </div>
          <div className="row mb-5">
            <div className="d-flex">
              {DigitalizeMock.map((item) => (
                <CustomCard
                  cardclass="digitalizecard col-lg-4"
                  image={item.image}
                  img="img-fluid"
                  para={item.para}
                  paraclass="mt-1"
                />
              ))}
            </div>
          </div>

          <div className="row">
            <div className="text-center">
              <CustomButton
                title="Read all post"
                className={"read-all-button"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Digitalize;
