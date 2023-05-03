import React from "react";
import "../Softwaremaintenancesupport.css";
import {
  Antivirus,
  DataTransfer,
  Musicwand,
  Online,
  Onlinechat,
  Speedtest,
} from "../../../../assets";

const ServicesSoftware = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="software-heading">
            Software Maintenance and Support Company For Uninterrupted Business
            Operations
          </h2>
          <p className="software-para">
            Software maintenance and support services are essential for
            businesses that rely on technology
            <br /> to keep their operations running smooth. Without proper
            maintenance.
          </p>
        </div>
        <div className="row mb-5">
          <div className="col-lg-4">
            <div className="  justify-content-center d-flex">
              <div className="antivirus">
                <img className="img-anti " src={Antivirus} alt="" />
              </div>
            </div>
            <h5 className="software-bugs text-center">Bugs & Glitch Removal</h5>
            <p className="software-para-hire text-center">
              Hire Golang weeb developers team to build robust concurrent
              applications, simplifying multithreading with ease.
            </p>
          </div>
          <div className="col-lg-4">
            <div className="  justify-content-center d-flex">
              <div className="antivirus1">
                <img src={DataTransfer} alt="" />
              </div>
            </div>
            <h5 className="software-bugs text-center">
              {" "}
              Data Migration & Audits
            </h5>
            <p className="software-para-hire text-center">
              Hire Golang weeb developers team to build robust concurrent
              applications, simplifying multithreading with ease.
            </p>
          </div>
          <div className="col-lg-4">
            <div className="  justify-content-center d-flex">
              <div className="antivirus2">
                <img className="img-anti " src={Online} alt="" />
              </div>
            </div>
            <h5 className="software-bugs text-center">
              WordPress Support & Maintenance Audits
            </h5>
            <p className="software-para-hire text-center">
              Hire Golang weeb developers team to build robust concurrent
              applications, simplifying multithreading with ease.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="  justify-content-center d-flex">
              <div className="antivirus3">
                <img className="img-anti " src={Onlinechat} alt="" />
              </div>
            </div>
            <h5 className="software-bugs text-center">
              Modification & Reconfiguration
            </h5>
            <p className="software-para-hire text-center">
              Hire Golang weeb developers team to build robust concurrent
              applications, simplifying multithreading with ease.
            </p>
          </div>
          <div className="col-lg-4">
            <div className="justify-content-center d-flex">
              <div className="antivirus4">
                <img src={Musicwand} alt="" />
              </div>
            </div>
            <h5 className="software-bugs text-center">
              Enhancement & Insertions
            </h5>
            <p className="software-para-hire text-center">
              Hire Golang weeb developers team to build robust concurrent
              applications, simplifying multithreading with ease.
            </p>
          </div>
          <div className="col-lg-4">
            <div className="  justify-content-center d-flex">
              <div className="antivirus5">
                <img className="img-anti " src={Speedtest} alt="" />
              </div>
            </div>
            <h5 className="software-bugs text-center">
              Performance Monitoring
            </h5>
            <p className="software-para-hire text-center">
              Hire Golang weeb developers team to build robust concurrent
              applications, simplifying multithreading with ease.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicesSoftware;
