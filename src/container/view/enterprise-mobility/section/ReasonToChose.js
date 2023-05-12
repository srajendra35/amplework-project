import React from "react";
import "../EnterpriseMobility.css";

const ReasonToChoose = () => {
  return (
    <>
      <div className="reasoncontainer container">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="reasonheading text-white">
              Reason to Choose Amplework
            </h2>
            <p className="reasonpara text-white">
              We provide expert advice and development services to
              <br /> clients through our well-versed knowledge about
              <br /> technologies & industries.
            </p>
          </div>
          <div className="col-lg-3 p-5">
            <h2 className=" text350   text-white mb-1">350+</h2>
            <h6 className="text350para text-white">Projects accomplished</h6>
          </div>
          <div className="borderchosse col-lg-2 p-0 text-center">
            <h2 className="text500  fw-bolder text-white">500+</h2>
            <h6 className="text350para text-white">Happy Clients</h6>
            <div className="borderbuttom ">
              <h2 className=" text500 fw-bolder  text-white mt-4">150+</h2>
              <h6 className="text350para text-white">Certificates</h6>
            </div>
          </div>
          <div className="col-lg-2 p-5">
            <h2 className=" text350   text-white">8+</h2>
            <h6 className="text350para text-white">Years’ Experience</h6>
          </div>
        </div>
      </div>
    </>
  );
};
export default ReasonToChoose;
