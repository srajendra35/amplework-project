import React from "react";
import Card from "react-bootstrap/Card";
import Watch from "../../assets/partTime.png";
import FullTime from "../../assets/hourglass.png";
import Hours from "../../assets/calendar.png";
import Button from "react-bootstrap/Button";
import cardbanner from "../../assets/enterpriseBg.png";
import Accessibility from "../../assets/Accessibility.png";
import Adaptability from "../../assets/Adaptability.png";
import Scalability from "../../assets/Scalability.png";
import Amplelogo from "../../assets/amplworkLogo.png";
import Iso from "../../assets/iso.png";
import goolge from "../../assets/google.png";
import Aws from "../../assets/aws.png";
import register from "../../assets/register.png";
import temple from "../../assets/startupbg.png";
import "../footer/footer.css";
import { CardGroup } from "react-bootstrap";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import Dmca from "../../assets/dmca.png";
const Footer = () => {
  return (
    <>
      <div className="containerbgcolor">
        <div className="container">
          <div className="row d-sm-block d-lg-flex py-5">
            <CardGroup>
              <div className="col-sm-12 col-lg-6">
                <Card
                  className="cardbackground"
                  style={{
                    backgroundImage: `url(${cardbanner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom 0px right 0px",
                  }}
                >
                  <Card.Body>
                    <Card.Title className="fw-bolder text-white p-2">
                      Do you want to hire resources for your project?
                    </Card.Title>

                    <Card.Text className="p-2 text-white">
                      we have web and app development teams to serve medern
                      tech-savy client by bidding on the challenges on their
                      bespoken requirement.
                      <div className="d-flex mt-5">
                        <div className="px-3">
                          <div className="bgcolor p-2">
                            <img src={Watch} alt="" />
                          </div>
                          <span>Full-Time</span>
                        </div>
                        <div className="px-3">
                          <div className="bgcolor p-1 text-center">
                            <img src={FullTime} alt="" />
                          </div>
                          <span>Part Time</span>
                        </div>
                        <div className="px-3">
                          <div className="bgcolor p-2">
                            <img src={Hours} alt="" />
                          </div>
                          <span>Hourly</span>
                        </div>
                      </div>
                    </Card.Text>
                    <Button className="btnbgcolor fw-bolder rounded-pill mt-3 mb-3 btn-outline-light px-3">
                      EXPLORE MORE
                    </Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-12 col-lg-6">
                <Card
                  className="secondcard"
                  style={{
                    backgroundImage: `url(${temple})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom 0px right 0px",
                  }}
                >
                  <Card.Body>
                    <Card.Title className="fw-bolder text-white">
                      Are you a startup and want to go live asap projects?
                    </Card.Title>

                    <Card.Text className=" text-white">
                      We Have been working with startup since our inception and
                      help them scale as they grow.Our Experience can help you
                      refine your business ideas and into the market asap.
                      <div className="d-flex mt-4">
                        <div>
                          <div className="card2 p-2 mb-2">
                            <img src={Accessibility} alt="" />
                          </div>
                          <span className="text-warning">Accessibility</span>
                        </div>
                        <div className="px-3">
                          <div className="card2  p-2 text-center">
                            <img src={Adaptability} alt="" />
                          </div>
                          <span className="text-warning">Adaptability</span>
                        </div>
                        <div className="px-3">
                          <div className="card2  p-1">
                            <img src={Scalability} alt="" />
                          </div>
                          <span className="text-warning">Scalability</span>
                        </div>
                      </div>
                    </Card.Text>
                    <Button className="explore fw-bolder rounded-pill mt-4 mb-4 btn-outline-warning px-3">
                      EXPLORE MORE
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </CardGroup>
          </div>
          <div className="row">
            <div className="amplelogo col-sm-12 col-md-4 col-lg-6">
              <img src={Amplelogo} width="80%" alt="" />
            </div>
            <div className="isologo col-sm-6 d-flex flex-wrap justify-content-between">
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
                  <img src={register} alt="register" />
                </div>
                <span className="fw-bold  text-primary">DUN & Brodstreet</span>
                <div className="text-center">
                  <span className="fw-bold  text-primary">Verified</span>
                </div>
              </div>
              <div>
                <div>
                  <img src={goolge} alt="" />
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
            <div className="d-flex flex-wrap justify-content-between">
              <ul>
                <h4 className="text-white fw-bolder">Development Services</h4>
                <li>
                  <a href="">Product Design</a>
                </li>
                <li>
                  <a href="">MVP Development</a>
                </li>
                <li>
                  <a href="">Continuous Prodcts Development</a>
                </li>
                <li>
                  <a href="">DevOps Solutions</a>
                </li>
                <li>
                  <a href="">Architecture Consulting</a>
                </li>
                <li>
                  <a href="">Mobile Application Development</a>
                </li>
                <li>
                  <a href="">Enterprise Web Development</a>
                </li>
                <li>
                  <a href="">Voice/Alexa App Development</a>
                </li>
                <li>
                  <a href="">loT App Development</a>
                </li>
                <li>
                  <a href="">BlockChain App Development</a>
                </li>
                <li>
                  <a href="">Al BOT Development</a>
                </li>
                <li>
                  <a href="">Mobile App Maaintenance</a>
                </li>
              </ul>
              <ul>
                <h4 className="text-white  fw-bolder">Dedicated Resources</h4>
                <li>
                  <a href="">Hire Swift Developer</a>
                </li>

                <li>
                  <a href="">Hire ios/iphone Developer</a>
                </li>
                <li>
                  <a href="">Hire Fluter Developer</a>
                </li>
                <li>
                  <a href="">Hire React Native Developer</a>
                </li>
                <li>
                  <a href="">Hire Android Developer</a>
                </li>
                <li>
                  <a href="">Hire Angular Developer</a>
                </li>
                <li>
                  <a href="">Hire Node js Developer </a>
                </li>
                <li>
                  <a href="">Hire Vue. js Developer</a>
                </li>
                <li>
                  <a href="">Hire Raect js Developer</a>
                </li>
                <li>
                  <a href="">Hire Laravel Developer</a>
                </li>
                <li>
                  <a href="">Hire Golrang Developer</a>
                </li>
                <li>
                  <a href="">Hire Full Stack Developer</a>
                </li>
              </ul>
              <ul>
                <h4 className="text-white  fw-bolder">Industry Solutions</h4>
                <li>
                  <a href="">Fitness Secter</a>
                </li>
                <li>
                  <a href="">Wellness Area</a>
                </li>
                <li>
                  <a href="">Health Service</a>
                </li>
                <li>
                  <a href="">Food & Hyperiocal</a>
                </li>
                <li>
                  <a href="">elearning Solutions</a>
                </li>
                <li>
                  <a href="">Social & Dating</a>
                </li>
                <li>
                  <a href="">Travel & Holidays</a>
                </li>
                <li>
                  <a href="">Fintech Solutions</a>
                </li>
                <li>
                  <a href="">Ecomm & Marketplace</a>
                </li>
                <li>
                  <a href="">Jobs & Employment</a>
                </li>
                <li>
                  <a href="">Real Estate Sector</a>
                </li>
                <li>
                  <a href="">Software Maintenance Support</a>
                </li>
              </ul>
              <ul>
                <h4 className="text-white  fw-bolder">Enterprise</h4>
                <li>
                  <a href="">On Demand App Decelopment</a>
                </li>
                <li>
                  <a href="">Field Sales & Service</a>
                </li>
                <li>
                  <a href="">Decument Management</a>
                </li>
                <li>
                  <a href="">Hippa Compliances</a>
                </li>
                <li>
                  <a href="">Software Testing Service</a>
                </li>
                <li>
                  <a href="">Logistic & Distribution</a>
                </li>
                <li>
                  <a href="">Enterprise App Integration</a>
                </li>
                <li>
                  <a href="">Cloud Infrastructure</a>
                </li>
                <li>
                  <a href="">Business Intelligence</a>
                </li>
                <li>
                  <a href="">Enterpise Mobility</a>
                </li>
                <li>
                  <a href="">Staff Augmentation Srvices</a>
                </li>
                <li>
                  <a href="">Inspection</a>
                </li>
              </ul>
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
                <p className=" col text-center">
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
