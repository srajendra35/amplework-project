import React from "react";
import "../technology/technology.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Ample from "../../assets/4wli1xeu.png";
const Technology = () => {
  return (
    <>
      <div className="technology">
        <div className="container">
          <div className="row">
            <h4 className="techheading">
              Are you searching for a dedicated technology partner, not
              <br /> just a service provider?
            </h4>
          </div>
          <div className="row mt-5">
            <div className="col">
              <p className="techpara">
                Our clients generated more than $50 million in revenues by
                creating seamless
                <br /> mobile applications that run without any bugs or
                glitches. Thus, we continue to
                <br /> upgrade our services to support clients in generating
                higher revenue for
                <br /> operations.
              </p>
              <div className="d-flex">
                <div className="text-primary">
                  <AiOutlineCheckCircle />
                </div>
                <p className="">Personalized business services.</p>
              </div>
              <div className="d-flex">
                <div className="text-primary">
                  <AiOutlineCheckCircle />
                </div>
                <p className="">Advanced practices for DevOps.</p>
              </div>
              <div className="d-flex">
                <div className="text-primary">
                  <AiOutlineCheckCircle />
                </div>
                <p className="">
                  Proficiency in AI/ML/Blockchain Solutions.
                </p>
              </div>
              <div className="d-flex">
                <div className="text-primary">
                  <AiOutlineCheckCircle />
                </div>
                <p className="">
                  Exclusive support for digital transformation.
                </p>
              </div>
              <div className="d-flex">
                <div className="text-primary">
                  <AiOutlineCheckCircle />
                </div>
                <p className="">Large scale & complex app building.</p>
              </div>
            </div>
            <div className="col">
              <div className="">
                <img src={Ample} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Technology;
