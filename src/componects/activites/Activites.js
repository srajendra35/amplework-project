import React from "react";
import "../activites/activities.css";
import { AiOutlineBug } from "react-icons/ai";
import { MdSettingsRemote } from "react-icons/md";
import ActivitiesCard from "./Activitescard";
import { SiTestinglibrary } from "react-icons/si";
import { FaHospitalUser } from "react-icons/fa";
import { SiMinetest } from "react-icons/si";
import { GrTestDesktop } from "react-icons/gr";
import { BiChip } from "react-icons/bi";
import { FiDatabase } from "react-icons/fi";
import { GiAbbotMeeple } from "react-icons/gi";
const Activities = () => {
  return (
    <>
      <div className="bgColor">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 mt-5">
              <h4 className="amplework">
                Amplework’s Targeted Activities For Application Maintenance
                Support Services
              </h4>
              <p className="ampleworkpara">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's<br/> standard dummy
                text ever since the 1500s,
              </p>
              <li>Amplework offers hire.</li>
              <li>dedicated Full Stack.</li>
              <li>developers who possess.</li>
            </div>
            <div className="col-sm-6 mt-5">
              <div className="d-flex justify-content-around">
                <ActivitiesCard
                  icon={<AiOutlineBug />}
                  title="Bug Busting &
Debugging"
bgcolor='
rgb(240 100 102)'
                />

                <ActivitiesCard
                  icon={<BiChip />}
                  title="Quality
Checks"bgcolor='rgb( 244 131 98)'
                />
              </div>
              <div className="d-flex  justify-content-around">
                <ActivitiesCard
                  icon={<SiTestinglibrary />}
                  title="Remote Product
Maintenance"bgcolor='rgb(158 109 175)'
                />

                <ActivitiesCard
                  icon={<FaHospitalUser />}
                  title="Version
Enhancements"bgcolor='rgb( 78 189 142)'
                />
              </div>
              <div className="d-flex justify-content-around">
                <ActivitiesCard
                  icon={<SiMinetest />}
                  title="Load
Testing"bgcolor='rgb(247 164 87)'
                />

                <ActivitiesCard
                  icon={<MdSettingsRemote />}
                  title="Tech
Troubleshooting"bgcolor='rgb(55 189 234)'
                />
              </div>
              <div className="d-flex justify-content-around">
                <ActivitiesCard
                  icon={<GiAbbotMeeple />}
                  title="Performance
Oversight"bgcolor='rgb(89 148 245)'
                />

                <ActivitiesCard
                  icon={<FiDatabase />}
                  title="User-Focused
Support"bgcolor='rgb(85 119 204)'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Activities;
