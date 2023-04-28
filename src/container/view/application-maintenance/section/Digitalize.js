import React from "react";
import '../ApplicationMaintenance.css'
 
import { Button, Card } from "react-bootstrap";
import { AiContent, Developer, Mvp } from "../../../../assets";
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
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Card>
                <img src={Mvp} alt="" />
              </Card>
              <p className="mt-1">
                Chatbots in Healthcare – Advantages, Disadvantages Applications
                & their Future
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Card>
                <img src={Developer} alt="" />
              </Card>
              <p className="mt-1">Foldable Smartphone App Development – 5 Dos</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Card>
                <img src={AiContent} alt="" />
              </Card>
              <p className="mt-1">Mobile DevOps – Advantages & Challenges</p>
            </div>
          </div>
          <div className="row">
            <div className="text-center mb-5">
              <Button className="text-center rounded-pill" variant="primary">
                Read all post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Digitalize;
