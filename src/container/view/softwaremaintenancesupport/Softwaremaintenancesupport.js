import React from "react";
import WelcomeBlock from "../../../componects/welcomeBlock/WelcomeBlock";
import { Developer, Softarebenner } from "../../../assets";
import GrowingyourBusiness from "./section/GrowingyourBusiness";
import ServicesSoftware from "./section/ServicesSoftware";
import IntegrateProfessional from "./section/IntegrateProfessionnal";
import Accomplish from "./section/Accomplish";
import ProcessCombines from "./section/ProcessCombines";
import DreamIt from "./section/DreamIt";
import FullStackDeveloper from "../application-maintenance/section/Developer";
import Dedicated from "../application-maintenance/section/Dedicated";
import TechnicalExperties from "./section/TechnicalExperties";
import RoleOur from "./section/RoleOur";
import Frequently from "../application-maintenance/section/Frequently";
import Appreciation from "../application-maintenance/section/Appreciation";
import SweatCoin from "../application-maintenance/section/SweatCoin";
import Digitalize from "../application-maintenance/section/Digitalize";
import Registration from "../application-maintenance/section/Registration";
import CustomButton from "../../../componects/button/Button";

const Softwaremaintenancesupport = () => {
  return (
    <>
      <WelcomeBlock
        bgImage={Softarebenner} 
        title="SOFTWARE MAINTENANCE AND SUPPORT SERVICES"
        desc="Partner With Us For Hassle-Free Software Maintenance and Support"
         btn='Consult Software Maintenance Experts'
        
      />
      <CustomButton
        btn="sdsdfs"
      />
      <section className="growingyourbusiness">
        <GrowingyourBusiness />
      </section>
      <section className="servicemaintenance">
        <ServicesSoftware />
      </section>
      <section className="integrateprofessionnal">
        <IntegrateProfessional />
      </section>
      <section className="accomplish">
        <Accomplish />
      </section>
      <section className="processcombines">
        <ProcessCombines />
      </section>
      <section className="dreamit">
        <DreamIt />
      </section>
      <section className="dedicated1">
        <Dedicated />
      </section>
      <section className="technicalexperties">
        <TechnicalExperties/>
      </section>
      <section className="roleour">
        <RoleOur/>
      </section>
      <Frequently/>
      <FullStackDeveloper/>
      <Appreciation/>
      <SweatCoin/>
      <Digitalize/>
      <Registration/>
    
    </>
  );
};
export default Softwaremaintenancesupport;
