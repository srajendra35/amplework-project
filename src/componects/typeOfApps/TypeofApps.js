import React from "react";
import "../typeOfApps/typeofapps.css";
import TypeOfAppCard from "./TypeOfAppCard";
import { AiFillCodepenCircle } from "react-icons/ai";
import { SiEnterprisedb } from "react-icons/si";
import { HiDeviceTablet } from "react-icons/hi";
import { IoIosBrowsers } from "react-icons/io";
import { SlGameController } from "react-icons/sl";
import { AiFillDashboard } from "react-icons/ai";
import { BsDatabaseFillAdd } from "react-icons/bs";
const TypeOfApps = () => {
  return (
    <>
      <section className="section-6">
        <div className="container">
          <div className="row">
            <h6 className="keep text-center">
              Keep Your Applications Always Shine
            </h6>
            <h4 className="types text-center">
              Types of Apps We Maintain At Amplework Software
            </h4>
            <p className="lorem text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.  Lorem Ipsum has been the industry's<br/> standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="row">
            <div className=" d-flex flex-wrap justify-content-center">
              <div className="moniter1">
                <TypeOfAppCard
                  //   icon={< />}
                  title="Web Apps"
                  bgcolor='blue'
                  color='white'
                  paragrapha="We conduct maintenance of applications that run within a web browser and can be accessed through the internet."
                />
              </div>
              <div className="moniter2">
                <TypeOfAppCard
                  icon={<AiFillCodepenCircle />}
                  title="Cloud Apps & SaaS"
                />
              </div>
              <div className="moniter3">
                <TypeOfAppCard
                  icon={<SiEnterprisedb />}
                  title="Enterprise Apps"
                />
              </div>
              <div className="moniter4">
                <TypeOfAppCard icon={<HiDeviceTablet />} title="AR/VR Apps" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-wrap justify-content-center">
              <div className="moniter1">
                <TypeOfAppCard
                  icon={<BsDatabaseFillAdd />}
                  title="Database Apps"
                />
              </div>
              <div className="moniter2">
                <TypeOfAppCard icon={<IoIosBrowsers />} title="AI/ML Apps" />
              </div>
              <div className="moniter3">
                <TypeOfAppCard
                  icon={<SlGameController />}
                  title="Gaming Apps"
                />
              </div>
              <div className="moniter4">
                <TypeOfAppCard icon={<AiFillDashboard />} title="Hybrid Apps" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TypeOfApps;
