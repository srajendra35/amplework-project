import React from "react";
import "../ApplicationMaintenance.css";
import { Button, Card } from "react-bootstrap";
import { BsArrowUpRight } from "react-icons/bs";
import CustomCard from "../../../../componects/customCard/CustomCard";
import { TrustedMock } from "../../../../mockup/TrustedMock";

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
                    <div>
                      <h4 className="dedicated text-white mb-3">
                        Dedicated Full-stack developer?
                      </h4>
                      <p className="text-white fs-5">
                        Let's Discuss Your Project how we will transform your
                        idea into an amazing digital product?
                      </p>
                    </div>
                    <div className="align-self-center">
                      <Button
                        className="rounded-pill p-2 px-2 fs-5"
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
            <h2 className="text-center fw-bolder">
              Trusted and Skilled Developer
            </h2>
            <p className="ourpara mt-3 mb-5">
              Our developers are ready to join your team and build amazing
              mobile & web apps.
            </p>
          </div>
          <div className="developer-card text-center">
            {TrustedMock.map((item) => (
              <CustomCard
                cardclass={"border-0"}
                image={item.image}
                img={"border cardimage"}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default FullStackDeveloper;
