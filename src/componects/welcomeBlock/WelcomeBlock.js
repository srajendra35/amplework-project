import React from "react";
import Navbar from "../navbar/Navbar";
import "./welcomeBlock.css";
import Button from "../button/Button";
// import Footer from "../footer/Footer";
// import Application from "../applicationperformance/Application";
// import Activities from "../activites/Activites";
// import ToolTechnology from "../tooltechnology/ToolTechnology";
// import TypeOfApps from "../typeOfApps/TypeofApps";
// import SoftwareUpdate from "../softwareupdate/SoftwareUpdate";
// import Fascinat from "../fascinat/Fascinat";
// import Diverse from "../diverse/Diverse";
// import Business from "../business/Business";
// import Technology from "../technology/Technology";
// import Frequently from "../frequently/Frequently";
// import FullStackDeveloper from "../fullstackdeveloper/Developer";
// import Appreciation from "../appreciation/Appreciation";
// import SweatCoin from "../sweatcoin/SweatCoin";
// import Digitalize from "../digitalize/Digitalize";
// import Registration from "../registrationFrom/Registration";
// import OctagonShape from "../polygen/PolygenShape";

const WelcomeBlock = (props) => {
  const { title, desc, bgImage } = props;
  console.log("bgImage", bgImage);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
      
        <div className="welcome bg-transparent  d-flex flex-row align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="text-center">
                <h6 className="fw-bolder text-white">{title}</h6>
                <h2 className="fw-bold text-white">{desc}</h2>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* <OctagonShape/>
       <ToolTechnology />
      <Application />
      <Activities />
      <TypeOfApps />
      <SoftwareUpdate />
      <Fascinat />
      <Diverse />
      <Business />
      <Technology />
      <Frequently />
      <FullStackDeveloper />
      <Appreciation />
      <SweatCoin />
      <Digitalize />
      <Registration />
      <Footer />  */}
    </>
  );
};

export default WelcomeBlock;
