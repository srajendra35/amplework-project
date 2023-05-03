import React from "react";
import WelcomeBlock from "../../../componects/welcomeBlock/WelcomeBlock";
import { Softarebenner } from "../../../assets";
import GrowingyourBusiness from "./section/GrowingyourBusiness";
import ServicesSoftware from "./section/ServicesSoftware";
import IntegrateProfessional from "./section/IntegrateProfessionnal";
import Accomplish from "./section/Accomplish";
import ProcessCombines from "./section/ProcessCombines";

const Softwaremaintenancesupport = () => {
  return (
    <>
      <WelcomeBlock
        bgImage={Softarebenner}
        title="SOFTWARE MAINTENANCE AND SUPPORT SERVICES"
        desc="Partner With Us For Hassle-Free Software Maintenance and Support"
        btn="Consult Software Maintenance Experts"
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
    </>
  );
};
export default Softwaremaintenancesupport;
