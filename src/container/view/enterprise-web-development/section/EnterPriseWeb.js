import React from "react";
import { Master } from "../../../../assets";
import { FiCheckCircle } from "react-icons/fi";
import { Button } from "react-bootstrap";

const EnterPriseWeb = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="enter">{props.heading}</h2>
          <p className="enterpara">{props.para}</p>
        </div>
        <div className="row justify-content-between"style={{flexDirection:`${props.reverse}`}}>
          <div className="col-sm-12 col-lg-4">
            <img src={props.image} width="100%" alt="" />
          </div>
          <div className="col-sm-12 col-lg-6">
            <h5 className="col-sm-12 text-center text-lg-start mb-4">
              {props.title}
            </h5>

            <li className="lifont">
              <span className="text-primary">
                <FiCheckCircle />
              </span>
              &nbsp; {props.litext1}
            </li>
            <li className="lifont">
              <span className="text-primary">
                <FiCheckCircle />
              </span>
              &nbsp; {props.litext2}
            </li>

            <li className="lifont">
              <span className="text-primary">
                <FiCheckCircle />
              </span>
              &nbsp; {props.litext3}
            </li>
            <li className="lifont">
              <span className="text-primary">
                <FiCheckCircle />
              </span>
              &nbsp; {props.litext4}
            </li>
            <li className="lifont">
              <span className="text-primary">
                <FiCheckCircle />
              </span>
              &nbsp; {props.litext5}
            </li>
            <div className="col-sm-12 text-center text-lg-start">
              <Button className=" letsenter text-white px-4 fw-bolder">
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EnterPriseWeb;
