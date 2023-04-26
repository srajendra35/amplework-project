import React from "react";
import "../digitalize/digitalize.css";
import Mvp from "../../assets/mvp.jpg";
import App from "../../assets/digitalApp.png";
import Ai from "../../assets/digitalApp2.png";
import { Button, Card } from "react-bootstrap";
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
                <img src={App} alt="" />
              </Card>
              <p className="mt-1">Foldable Smartphone App Development – 5 Dos</p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <Card>
                <img src={Ai} alt="" />
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
