import React from "react";
import Navbar from "../navbar/Navbar";
import "./welcomeBlock.css";
import Button from "../button/Button";
import Footer from "../footer/Footer";

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
        <Navbar />
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
      <Footer/>
    </>
  );
};

export default WelcomeBlock;
