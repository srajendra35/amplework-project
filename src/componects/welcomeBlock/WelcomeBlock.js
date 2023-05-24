import React from "react";
import "./welcomeBlock.css";
import CustomButton from "../button/Button";
const WelcomeBlock = (props) => {
  const { title, desc, bgImage, btn } = props;

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="welcome bg-transparent  d-flex flex-row align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="text-center">  
                <h6 className="titlespace fw-bolder text-warning">{title}</h6>
                <h2 className="amplepageheading   text-white mt-3">{desc}</h2>
                {btn && btn.length ? (
                  <CustomButton
                    title={btn}
                    className={"custombutton"}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeBlock;
