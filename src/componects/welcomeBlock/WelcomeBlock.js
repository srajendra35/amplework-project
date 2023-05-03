import React from "react";
import "./welcomeBlock.css";
import Button from "../button/Button";
const WelcomeBlock = (props) => {
  const { title, desc, bgImage ,btn} = props;
  console.log("bgImage", bgImage);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition:"center",
          backgroundSize:"cover"
        }}
      >
        <div className="welcome bg-transparent  d-flex flex-row align-items-center">
          <div className="container">

            <div className="row justify-content-center">
              <div className="text-center">
                <h6 className="titlespace fw-bolder text-warning">{title}</h6>
                <h2 className="amplepageheading  text-white mt-3">{desc}</h2>
               { btn &&btn.length ? <Button btn={btn}/>:" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeBlock;
