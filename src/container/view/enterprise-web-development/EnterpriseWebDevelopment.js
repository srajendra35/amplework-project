import React from "react";
import WelcomeBlock from "../../../componects/welcomeBlock/WelcomeBlock";
import { Appmobile, EnterWeb, Master } from "../../../assets";
import OverView from "./section/OverView";
import './EnterpriseWebDevelopment.css'
import EnterPriseWeb from "./section/EnterPriseWeb";
 


const EnterpriseWebDevelopment = () => {
  return (
    <>
      <WelcomeBlock
        bgImage={EnterWeb}
        title="ENTERPRISE WEB DEVELOPMENT"
        desc="Elevate Your Web Presence With Enterprise WebSite  Development"
      />
      <section className="allview">
        <OverView />
      </section>
      <section className="enterprise">
        <EnterPriseWeb heading='Enterprise Web Development Services' para=' Enterprise web development services effectively involve building and
            maintaining web-based applications for large-scale organizations.
            Our developers incorporate 7+ years of experience in working towards
            the latest technologies - such as: Java, .NET, Ruby on Rails, React,
            Node.js and many more. We also provide consultancy services to you
            for suggesting new enterprise IT strategies and enterprise web
            design solutions.' title='Your Website, Our Masterpiece' litext1=''  litext2=''   litext3=''   litext4='' litext5='' image={Master}  />
      </section>
      {/* <section className="enterprisesoftware">
      <EnterPriseWeb heading='Enterprise Software Development' para='The market of enterprise software development is projected to grow at an astonishing growth rate of 7.12% CAGR. Thus, we encourage our clients to scale up their operations with our reliable enterprise software development services. Through our solutions, businesses can handle complex processes as well as adopt to-scale solution approaches in an effective manner.' title='Our Superpower: Enterprise Solutions'  litext1=''  litext2=''   litext3=''   litext4='' litext5='' image={Appmobile}  />
      </section> */}
    </>
  );
};
export default EnterpriseWebDevelopment;
