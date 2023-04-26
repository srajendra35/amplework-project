import React from "react";
import { WelcomeBlock } from "../../componects";
import Banner from '../../assets/banner.jpg'

const Home = () => {
  return (
    <div>
      <WelcomeBlock bgImage={Banner} title="APPLICATION MAINTENANCE AND SUPPORT" desc="Top class application maintenance and support services for error-free high-performing applications" />
    </div>
  );
};

export default Home;
