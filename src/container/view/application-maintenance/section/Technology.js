import React from "react";
import "../ApplicationMaintenance.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MobileTechnology } from "../../../../assets";

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
            <div className="col-sm-12 col-lg-6">
              <p className="techpara">
                Our clients generated more than $50 million in revenues by
                creating seamless mobile applications that run without any bugs
                or glitches. Thus, we continue to upgrade our services to
                support clients in generating higher revenue for operations.
              </p>
              <div className="d-flex">
                <div className="text-primary">
                  <AiOutlineCheckCircle />
                </div>
                <p className="px-2">Personalized business services.</p>
              </div>
              <div className="d-flex">
                <div className="text-primary">
                  <AiOutlineCheckCircle />
                </div>
                <p className="px-2">Advanced practices for DevOps.</p>
              </div>
              <div className="d-flex">
                <div className="text-primary">
                  <AiOutlineCheckCircle />
                </div>
                <p className="px-2">Proficiency in AI/ML/Blockchain Solutions.</p>
              </div>
              <div className="d-flex">
                <div className="text-primary">
                  <AiOutlineCheckCircle />
                </div>
                <p className="px-2">
                  Exclusive support for digital transformation.
                </p>
              </div>
              <div className="d-flex">
                <div className="text-primary">
                  <AiOutlineCheckCircle />
                </div>
                <p className="px-2">Large scale & complex app building.</p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div>
                <img src={MobileTechnology} width={"100%"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Technology;
