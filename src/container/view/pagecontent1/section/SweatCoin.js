import React from "react";
import '../../pagecontent1/PageContent.css'
import { AiFillAndroid } from "react-icons/ai";
import { BsApple } from "react-icons/bs";
import Mobile from "../../../../assets/swetcoin.png";
import { Carousel } from "react-bootstrap";
const SweatCoin = () => {
  return (
    <>
      <div className="ports">
        <h4 className="sweat text-center mb-2 mt-5">
          Portfolio of Our Accomplishments
        </h4>

        <Carousel>
          <Carousel.Item>
            <div className="container">
              <div className="row">
                <div className="newpara text-dark col-sm-12 col-lg-6">
                  <h3 className="text-white  mt-5 mb-5">Sweatcoin</h3>
                  <p className="newpara">
                    A new bread of step counter and activity tracker that
                    converts your steps into a currency you can spend on gadgets
                    sports and fitness kit service and experience you can change
                    exchange them with friends and family.
                  </p>
                  <div className="d-flex flex-wrap mb-5 mt-5 text-white">
                    <h5>Available on</h5>
                    <h5 className="mx-3">
                      <AiFillAndroid />
                    </h5>
                    <h5 className="apple">
                      <BsApple />
                    </h5>
                  </div>
                  <div className="d-flex flex-wrap justify-content-between mb-5 text-white">
                    <div className="d-flex flex-wrap justify-content-between  ">
                      <div>
                        <h4>50M+</h4>
                        <p className="down">Downloads</p>
                      </div>
                      <div>
                        <span className=" mx-5 line">|</span>
                      </div>
                    </div>
                    <div className=" d-flex flex-wrap justify-content-between">
                      <div>
                        <h4>4.6/5</h4>
                        <p className="down">Rating</p>
                      </div>
                      <div>
                        <span className=" mx-5 line">|</span>
                      </div>
                    </div>

                    <div className="">
                      <h4>$20M</h4>
                      <p className="down">Funding Raised</p>
                    </div>
                  </div>
                  <div className="d-flex  flex-wrap justify-content-between text-white">
                    <p>Rewards </p>
                    <span>|</span>
                    <p>Wallet </p>
                    <span>|</span>
                    <p>Traker </p>
                    <span>|</span>
                    <p>eCommerce </p>
                    <span>|</span>
                    <p>Fintech </p>
                  </div>
                </div>

                <div className="col-sm-12 col-lg-6">
                  <img src={Mobile} width={"100%"} alt="" />
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="container">
              <div className="row">
                <div className="newpara text-dark col-sm-12 col-lg-6">
                  <h3 className="text-white  mt-5 mb-5">Sweatcoin</h3>
                  <p className="newpara">
                    A new bread of step counter and activity tracker that
                    converts your steps into a currency you can spend on gadgets
                    sports and fitness kit service and experience you can change
                    exchange them with friends and family.
                  </p>
                  <div className="d-flex flex-wrap mb-5 mt-5 text-white">
                    <h5>Available on</h5>
                    <h5 className="mx-3">
                      <AiFillAndroid />
                    </h5>
                    <h5 className="apple">
                      <BsApple />
                    </h5>
                  </div>
                  <div className="d-flex flex-wrap justify-content-between mb-5 text-white">
                    <div className="d-flex flex-wrap justify-content-between  ">
                      <div>
                        <h4>50M+</h4>
                        <p className="down">Downloads</p>
                      </div>
                      <div>
                        <span className=" mx-5 line">|</span>
                      </div>
                    </div>
                    <div className=" d-flex flex-wrap justify-content-between">
                      <div>
                        <h4>4.6/5</h4>
                        <p className="down">Rating</p>
                      </div>
                      <div>
                        <span className=" mx-5 line">|</span>
                      </div>
                    </div>

                    <div className="">
                      <h4>$20M</h4>
                      <p className="down">Funding Raised</p>
                    </div>
                  </div>
                  <div className="d-flex  flex-wrap justify-content-between text-white">
                    <p>Rewards </p>
                    <span>|</span>
                    <p>Wallet </p>
                    <span>|</span>
                    <p>Traker </p>
                    <span>|</span>
                    <p>eCommerce </p>
                    <span>|</span>
                    <p>Fintech </p>
                  </div>
                </div>

                <div className="col-sm-12 col-lg-6">
                  <img src={Mobile} width={"100%"} alt="" />
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};
export default SweatCoin;
