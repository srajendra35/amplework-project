import React from "react";
import OctagonShape from "./section/DedicatedSupporter";
import ToolTechnology from "./section/ToolTechnology";
import Application from "./section/Application";
import Activities from "./section/Activites";
import TypeOfApps from "./section/TypeofApps";
import SoftwareUpdate from "./section/SoftwareUpdate";
import Fascinat from "./section/Fascinat";
import Diverse from "./section/Diverse";
import Business from "./section/Business";
import Technology from "./section/Technology";
import Frequently from "./section/Frequently";
import FullStackDeveloper from "./section/Developer";
import Appreciation from "./section/Appreciation";
import SweatCoin from "./section/SweatCoin";
import Digitalize from "./section/Digitalize";
import Registration from "./section/Registration";
import WelcomeBlock from "../../../componects/welcomeBlock/WelcomeBlock";
import { Banner } from "../../../assets";

const ApplicationMaintenance = () => {
  return (
    <>
       <WelcomeBlock bgImage={Banner} title="APPLICATION MAINTENANCE AND SUPPORT" desc="Top class application maintenance and support services for error-free high-performing applications"  btn="schedule btn"/>
      <OctagonShape />
      <ToolTechnology />
      <Application />
      <Activities/>
      <TypeOfApps/>
      <SoftwareUpdate/>\
      <Fascinat/>
      <Diverse/>
      <Business/>
      <Technology/>
      <Frequently/>
      <FullStackDeveloper/>
      <Appreciation/>
      <SweatCoin/>
      <Digitalize/>
      <Registration/>
      
    </>
  );
};
export default ApplicationMaintenance;
