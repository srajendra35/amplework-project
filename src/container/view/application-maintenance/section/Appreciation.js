import React from "react";
import '../ApplicationMaintenance.css'
import { Card, Carousel } from "react-bootstrap";
import { ImLinkedin2 } from "react-icons/im";
import { Mask, Prom } from "../../../../assets";
const Appreciation = () => {
  return (
    <>
      <Carousel variant='dark'>
        <Carousel.Item>
          <div className="appreciation">
            <div className="container ">
              <div className="row">
                <div>
                  <img src={Prom} alt="" />
                </div>

                <h2 className="text-center fw-bolder">
                  We Proudly Showcase - Our Client Appreciations
                </h2>
              </div>
              <div className="row mt-5">
                <div className="col-sm-12 col-lg-6">
                  <Card className="border-0">
                    <div>
                      <img className="Mask" src={Mask} width={"100%"} alt="" />
                    </div>
                  </Card>
                  <div>
                    <img className="mt-5" src={Prom} alt="" />
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <h3 className="ampleworkheading mb-4 text-center">
                    Amplework is a great team to work with, highly recommended.
                  </h3>
                  <p className="flaw text-center mt-5">
                    Flawless Plank was an AI based fitness application and we
                    are glad we get a chance to work on this project with
                    Amplework. They have excellent skills in building mobile
                    apps and willing to work around issues to solve them Highly
                    Recommended!
                  </p>
                  <h6 className="text-center fw-bolder mt-5">
                    MANU NAMBOODIRI
                  </h6>
                  <p className="founder text-center">Founder, Flawless Plank</p>
                  <div className="iconlink ">
                    <ImLinkedin2 className="iconimage rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="appreciation">
        <div className="container">
          <div className="row">
            <div>
              <img src={Prom} alt="" />
            </div>

            <h2 className="text-center fw-bolder">
              We Proudly Showcase - Our Client Appreciations
            </h2>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-lg-6">
              <Card className="border-0">
                <div>
                  <img className="Mask" src={Mask} width={"100%"} alt="" />
                </div>
              </Card>
              <div>
                <img className="mt-5" src={Prom} alt="" />
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <h3 className="ampleworkheading mb-4 text-center">
                Amplework is a great team to work with, highly recommended.
              </h3>
              <p className="flaw text-center mt-5">
                Flawless Plank was an AI based fitness application and we are
                glad we get a chance to work on this project with Amplework.
                They have excellent skills in building mobile apps and willing
                to work around issues to solve them Highly Recommended!
              </p>
              <h6 className="text-center fw-bolder mt-5">MANU NAMBOODIRI</h6>
              <p className="founder text-center">Founder, Flawless Plank</p>
              <div className="iconlink ">
                <ImLinkedin2 className="iconimage rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default Appreciation;
