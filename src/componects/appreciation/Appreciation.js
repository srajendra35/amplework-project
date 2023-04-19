import React from "react";
import "../appreciation/appreciation.css";
import Prom from "../../assets/promotion.png";
import Mask from "../../assets/Mask Group 72.png";
import { Card } from "react-bootstrap";
import {ImLinkedin2} from 'react-icons/im'
const Appreciation = () => {
  return (
    <>
      <div className="appreciation">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-sm-2">
              <img src={Prom} alt="" />
            </div>
            <div className="col">
              <h4 className="text-center fw-bolder">
                We Proudly Showcase - Our Client Appreciations
              </h4>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <Card className="border-0">
                <img className="Mask" src={Mask} alt="" />
              </Card>
              <div className="col-sm-6 text-end">
              <img className="mt-5" src={Prom} alt="" />

              </div>
            </div>
            <div className="col">
              <h4 className="ampleworkheading mb-4 text-center">
                Amplework is a great team to work with, highly recommended.
              </h4>
              <p className="flaw text-center">Flawless Plank was an AI based fitness application and we are glad we get a chance to work  on this project with Amplework. They have excellent skills in building mobile apps and willing  to work around issues to solve them Highly Recommended!</p>
              <h6 className="text-center fw-bolder mt-5">MANU NAMBOODIRI</h6>
              <p className="founder text-center">Founder, Flawless Plank</p>
              <div className="iconlink ">
              <ImLinkedin2 className="iconimage rounded"/>

              </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Appreciation;
