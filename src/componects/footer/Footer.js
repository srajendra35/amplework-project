import React from "react";
import Card from "react-bootstrap/Card";
import "../footer/footer.css";
import { CardGroup } from "react-bootstrap";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import {
  Access,
  Adap,
  Amplelogo,
  EnterPrise,
  Stratup,
  Aws,
  Dmca,
  FullTime,
  Google,
  Hours,
  Iso,
  Register,
  Scal,
  Watch,
} from "../../assets";
import CustomButton from "../button/Button";
import { Footerli } from "../../mockup/Footer";

const Footer = () => {
  return (
    <>
      <div className="containerbgcolor">
        <div className="container">
          <div className="row d-sm-block d-lg-flex py-5">
            <CardGroup className="card-group-footer">
              <div className="col-sm-12 col-lg-6">
                <Card
                  className="cardbackground p-4 h-100"
                  style={{
                    backgroundImage: `url(${EnterPrise})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom 0px right 0px",
                  }}
                >
                  <Card.Body>
                    <Card.Title className="fw-bolder text-white mb-3">
                      Do you want to hire resources for your project?
                    </Card.Title>

                    <Card.Text className="we-have-para text-white">
                      we have web and app development teams to serve medern
                      tech-savy client by bidding on the challenges on their
                      bespoken requirement.
                      <div className="row mt-5">
                        <div className="d-flex">
                          <div className="pe-sm-5  pe-xl-5 pr-xl-3 m-1   text-center">
                            <figure className="watch">
                              <img
                                className="bgcolor"
                                src={Watch}
                                alt=""
                              />
                            </figure>
                            Part Time
                          </div>
                          <div className="pe-sm-5 pe-xl-5 pr-xl-3 m-1    text-center">
                            <figure className="watch">
                              <img
                                className="bgcolor "
                                src={FullTime}
                                alt=""
                              />
                            </figure>
                            Full-Time
                          </div>
                          <div className="pe-sm-5 pe-xl-5 pr-xl-3 m-1  text-center">
                            <figure className="watch">
                              <img
                                className="bgcolor "
                                src={Hours}
                                alt=""
                              />
                            </figure>
                            Hourly
                          </div>
                        </div>
                      </div>
                    </Card.Text>
                    <CustomButton
                      title="EXPLORE MORE"
                      className={"explore-btn"}
                    />
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-12 col-lg-6 ">
                <Card
                  className="secondcard p-4 h-100"
                  style={{
                    backgroundImage: `url(${Stratup})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom 0px right 0px",
                  }}
                >
                  <Card.Body>
                    <Card.Title className="fw-bolder text-white mb-3">
                      Are you a startup and want to go live asap projects?
                    </Card.Title>

                    <Card.Text className="we-have-para text-white">
                      We Have been working with startup since our inception and
                      help them scale as they grow.Our Experience can help you
                      refine your business ideas and into the market asap.
                      <div className="d-flex mt-4">
                        <div className="pe-sm-5  pe-xl-5 pr-xl-3 m-1  text-center">
                          <div className="card2">
                            <img src={Access} alt="" />
                          </div>
                          <span className="text-warning">Accessibility</span>
                        </div>
                        <div className=" pe-sm-5  pe-xl-5 pr-xl-3 m-1 text-center">
                          <div className="card2">
                            <img src={Adap} alt="" />
                          </div>
                          <span className="text-warning">Adaptability</span>
                        </div>
                        <div className=" pe-sm-5  pe-xl-5 pr-xl-3 m-1  text-center">
                          <div className="card2">
                            <img src={Scal} alt="" />
                          </div>
                          <span className="text-warning">Scalability</span>
                        </div>
                      </div>
                    </Card.Text>
                    <CustomButton
                      title="EXPLORE MORE"
                      className={"explore-btn2 "}
                    />
                  </Card.Body>
                </Card>
              </div>
            </CardGroup>
          </div>
          <div className="row">
            <div className="amplelogo col-lg-6">
              <img src={Amplelogo} width="80%" alt="" />
            </div>
            <div className="isologo col-lg-6 d-flex flex-wrap justify-content-between">
              <div>
                <div>
                  <img src={Iso} alt="iso" />
                </div>
                <span className="p-4 text-center fw-bold text-primary">
                  ISO-27001
                </span>
                <div>
                  <span className=" fw-bold  text-primary">
                    Software Security
                  </span>
                </div>
              </div>
              <div>
                <div>
                  <img src={Register} alt="register" />
                </div>
                <span className="fw-bold  text-primary">DUN & Brodstreet</span>
                <div className="text-center">
                  <span className="fw-bold  text-primary">Verified</span>
                </div>
              </div>
              <div>
                <div>
                  <img src={Google} alt="" />
                </div>
                <span className="fw-bold  text-primary">Google cloud</span>
                <div className="text-center">
                  <span className="fw-bold text-primary">Partner</span>
                </div>
              </div>
              <div>
                <div>
                  <img src={Aws} alt="" />
                </div>
                <span className="fw-bold  text-primary">AWS Consulting</span>
                <div className="text-center">
                  <span className="fw-bold text-primary">Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="linkline">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-wrap justify-content-between mt-4 mb-4">
              {Footerli.map((items) => (
                <div>
                  {items?.list?.map((item) => (
                    <div className="text-white">
                      <h4>{item.heading}</h4>
                      <li
                        className="customli"
                        style={{ fontSize: "18px", color: "#9c9998" }}
                      >
                        <a href="">{item.li}</a>
                      </li>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="iconfooter">
        <div className="container">
          <div className="row">
            <div className="footer d-flex flex-wrap justify-content-between">
              <div className="col-sm-6">
                <ul className="d-flex flex-wrap justify-content-between">
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Services</a>
                  </li>
                  <li>
                    <a href="">Career</a>
                  </li>
                  <li>
                    <a href="">Contacts Us</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="">Privacy Poilcy</a>
                  </li>
                  <li>
                    <a href="">Legal</a>
                  </li>
                </ul>
              </div>
              <div className="col d-flex flex-wrap justify-content-between ">
                <div className="col text-center">
                  <FaFacebookF className="icon text-white" />
                </div>
                <div className="col text-center">
                  <FaLinkedinIn className="icon text-white" />
                </div>
                <div className="col text-center">
                  <CiTwitter className="icon text-white" />
                </div>
                <div className="col text-center">
                  <AiOutlineInstagram className="icon text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerend">
        <div className="container">
          <div className="row">
            <ul className="d-flex flex-wrap mt-4">
              <div className="col-sm-6 d-flex flex-wrap fw-bolder text-white">
                <div className="col-sm-6">
                  <li>Amplework @ 2023 | All Right Reserved</li>
                </div>
                <p className="col text-center">
                  <img src={Dmca} alt="" />
                </p>
              </div>
              <div className="col-sm-6 d-flex flex-wrap justify-content-between fw-bolder text-white">
                <li>USA</li>
                <span>|</span>
                <li>UK</li>
                <span>|</span>
                <li>Canada</li>
                <span>|</span>
                <li>Australia</li>
                <span>|</span>
                <li>Narway</li>
                <span>|</span>
                <li>Germany</li>
                <span>|</span>
                <li>France</li>
                <span>|</span>
                <li>Sweden</li>
                <span>|</span>
                <li>Poland</li>
                <span>|</span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
