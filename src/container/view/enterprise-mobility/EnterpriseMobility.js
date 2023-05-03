import React from "react";
import WelcomeBlock from "../../../componects/welcomeBlock/WelcomeBlock";
import {
  Dotted,
  Facial,
  Girl,
  Layers,
  Mobility,
  New,
  Object,
  SecondDotted,
  Study,
} from "../../../assets";
import Integration from "./section/integration";
import ExperienanceInnovate from "./section/ExperienanceInnovate";
import InhanceRoi from "./section/EnhanceRoi";
import ReasonToChoose from "./section/ReasonToChose";
import CategoryPhases from "./section/CategoryPhases";
import BrandCollaborated from "./section/BrandCollAborated";
import EngagementalModal from "./section/EngagementalModal";
import DepartmenatalBrand from "./section/DepartmentalBrand";
import DifferentPlatforms from "./section/DefferentPlatfroms";
import TechnologyStack from "../enterprise-web-development/section/TechnologyStack";
import FullStackDeveloper from "../application-maintenance/section/Developer";
import Appreciation from "../application-maintenance/section/Appreciation";
import SweatCoin from "../application-maintenance/section/SweatCoin";
import Digitalize from "../application-maintenance/section/Digitalize";
import Registration from "../application-maintenance/section/Registration";
const EnterpriseMobility = () => {
  return (
    <>
      <WelcomeBlock
        bgImage={Mobility}
        title="ADVANCED ENTERPRISE MOBILITY SOLUTIONS"
        desc="Empower Business Operations From Enterprise Mobility Development"
      />
      <section className="integration">
        <Integration />
      </section>
      <section className="innvoate">
        <ExperienanceInnovate />
      </section>
      <section className="inhanceroi">
        <InhanceRoi />
      </section>
      <section className="reasontochoose">
        <ReasonToChoose />
      </section>
      <section className="categoryphases">
        <CategoryPhases
          title=" 4 Category Phases of Enterprise Mobility Management Software"
          para="  Enterprise mobility solutions stand on 4 primary key phrases. At
            Amplework, we share our expertise in all these categories."
          image={Object}
          one="1"
          heading="Device & Information Management"
          headpara="   This category focuses on managing and securing mobile devices
                  and the data that resides in the storage devices. It includes
                  features such as device."
          bgimages={Dotted}
        />
      </section>
      <section>
        <CategoryPhases
          image={Facial}
          one="2"
          heading="App & Identity Management"
          headpara="In-app & identify management we involve extensive features which are follows - app distribution, app wrapping, authentication factors."
          reverse="row-reverse"
          bgimages={SecondDotted}
          backgroundposition="right top"
        />
      </section>
      <section>
        <CategoryPhases
          image={New}
          one="3"
          heading="Content Management "
          headpara=" This category of operations involves managing & securing the content that is highly accessed and shared on mobile devices. It includes extensive features."
          bgimages={Dotted}
        />
      </section>
      <section className=" expense">
        <CategoryPhases
          image={Girl}
          one="4"
          heading="Expense & Budget Management"
          headpara="It focuses on managing and optimizing the expenses associated with enterprise mobility - such as: device procurement and service contracts."
          reverse="row-reverse"
          bgimages={SecondDotted}
          backgroundposition="right top"
        />
      </section>
      <section className="brandcollaborated">
        <BrandCollaborated />
      </section>
      <section className="engagementalmodal">
        <EngagementalModal />
      </section>
      <section className="departmentalBrand">
        <DepartmenatalBrand />
      </section>
      <section className="differentplatfrom">
        <DifferentPlatforms />
      </section>
      <section className="technologystack">
      <TechnologyStack/>

      </section>
      <FullStackDeveloper/>
     <Appreciation/>
     <SweatCoin/>
     <Digitalize/>
     <Registration/>
    </>
  );
};
export default EnterpriseMobility;
