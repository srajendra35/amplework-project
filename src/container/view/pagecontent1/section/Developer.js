import React from "react";
import '../../pagecontent1/PageContent.css'
import { Button, Card } from "react-bootstrap";
import { BsArrowUpRight } from "react-icons/bs";
import Boss from "../../../../assets/boss.png";
import Sir from "../../../../assets/sir.png";
import Sahib from "../../../../assets/sahib-khan.jpg";
import Raj from "../../../../assets/rajkumar.jpg";
const FullStackDeveloper = () => {
  return (
    <>
      <div className="stack">
        <div className="container">
          <div className="row">
            <div className="mt-5">
              <Card className="fullcard mb-5">
                <Card.Body>
                  <div className="d-flex flex-wrap justify-content-around">
                    <div className="">
                      <h4 className="dedicated text-white mb-3">
                        Dedicated Full-stack developer?
                      </h4>
                      <p className="text-white">
                        Let's Discuss Your Project how we will transform your
                        idea into an amazing digital product?
                      </p>
                    </div>
                    <div>
                      <Button
                        className="rounded-pill p-2 px-2"
                        variant="primary"
                      >
                        Get 2 Week Free Trial
                        <BsArrowUpRight className="text-white mx-3" />
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row">
            <h4 className="text-center fw-bolder">
              Trusted and Skilled Developer
            </h4>
            <p className="ourpara mt-3 mb-5">
              Our developers are ready to join your team and build amazing
              mobile & web apps.
            </p>
          </div>
          <div className="row">
            <div className="d-flex flex-wrap justify-content-center mb-5">
              <Card className="border-0 mx-4">
                <div>
                  <img className="border cardimage" src={Boss} alt="" />
                </div>
              </Card>
              <Card className=" border-0 mx-4">
                <div>
                  <img className="border cardimage" src={Sir} alt="" />
                </div>
              </Card>
              <Card className=" border-0 mx-4">
                <div>
                  <img className="border cardimage" src={Sahib} alt="" />
                </div>
              </Card>
              <Card className=" border-0 mx-4">
                <div>
                  <img className="border cardimage" src={Raj} alt="" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FullStackDeveloper;
