import React from "react";
import '../ApplicationMaintenance.css'
 
import { FiAirplay } from "react-icons/fi";
import { SiSimilarweb } from "react-icons/si";
import { TbSettingsOff } from "react-icons/tb";
import { CgPerformance } from "react-icons/cg";
import { MdOutlineSecurity } from "react-icons/md";
import { MdSystemUpdateAlt } from "react-icons/md";
import { MdOutlineSettingsApplications } from "react-icons/md";
import ToolTechnologyCard from "../../../../componects/ToolTechnologycard";


const ToolTechnology = () => {
  return (
    <>
      <div className="tool">
        <div className="container">
          <div className="exp row">
            <h2 className="experience text-white text-center">
              Experience Unparalleled Excellence with Our Comprehensive
              Application Support and Maintenance
            </h2>
            <p className="our text-white text-center">
              Our advanced mobile application maintenance and support provide a
              comprehensive <br/>approach to managing and maintaining your
              applications.
            </p>
          </div>
          <div className="row">
            <div className="d-flex flex-wrap justify-content-center">
              <div className="p-2">
                <ToolTechnologyCard
                  icon={<FiAirplay />}
                  title="Proactive Monitoring & Maintenance"
            //       paragrapha="  We use advanced monitoring tools and technologies to proactively
            // identify potential issues before they become critical. This ensures
            // the smooth functioning of your applications, reducing downtime and
            // improving user experience.."
                />
              </div>
              <div className="p-2 ">
                <ToolTechnologyCard
                  icon={<SiSimilarweb />}
                  title="Web App
Maintenance"
                />
              </div>
              <div className="p-2 ">
                <ToolTechnologyCard
                  icon={<TbSettingsOff />}
                  title="Incident Management
"
                />
              </div>
              <div className="p-2 ">
                <ToolTechnologyCard
                  icon={<CgPerformance />}
                  title="Performance
Optimization"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-wrap justify-content-center">
              <div className="p-2">
                <ToolTechnologyCard
                  icon={<MdOutlineSecurity />}
                  title="Application Security
and Compliance"
            //       paragrapha="  We use advanced monitoring tools and technologies to proactively
            // identify potential issues before they become critical. This ensures
            // the smooth functioning of your applications, reducing downtime and
            // improving user experience.."
                />
              </div>
              <div className="p-2">
                <ToolTechnologyCard
                  icon={<MdSystemUpdateAlt />}
                  title="Regular
Updates & Upgrades"
                />
              </div>
              <div className="p-2">
                <ToolTechnologyCard
                  icon={<MdOutlineSettingsApplications />}
                  title="Application
Integration"
                />
              </div>
              <div className="p-2">
                <ToolTechnologyCard
                  icon={<CgPerformance />}
                  title="Customized
Support Plans"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ToolTechnology;
