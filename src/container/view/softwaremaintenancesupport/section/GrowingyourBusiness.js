import React from "react";
import "../Softwaremaintenancesupport.css";
import { Tawer } from "../../../../assets";
const GrowingyourBusiness = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h2 className="leaveheading">
              Leave Software Maintenance to us - Focus on Growing your Business!
            </h2>
            <p className="leavepara">
              Magnificent your business growth by incorporating our software
              maintenance services. We understand that frequent software
              hindrances or challenges create immense difficulty for you to run
              the business effectively. At Amplework, we promise our clients
              that we will take care of all their software challenges while they
              can emphasize the growth of their business units.
            </p>
            <p className="leavepara mt-5">
              So, partner with Amplework for seamless software maintenance that
              provides you complete peace of mind. Our software maintenance and
              support services ensure that your software will stay secure and
              always up-to-date. Although, we are known in the industry for
              delivering timely and result-oriented software services that help
              you to enhance your business revenue.
            </p>
          </div>
          <div className="col-lg-5">
            <img src={Tawer} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};
export default GrowingyourBusiness;
