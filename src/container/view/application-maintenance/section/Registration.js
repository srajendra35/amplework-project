import React from "react";
import '../ApplicationMaintenance.css'
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { AiOutlineSkype } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsDatabaseAdd } from "react-icons/bs";
import { ImUsers } from "react-icons/im";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { RiTimerLine } from "react-icons/ri";
 
import { GiRadioTower } from "react-icons/gi";
import { Captcha, Novamam, Pcs, Santoshsir } from "../../../../assets";
 
const Registration = () => {
  return (
    <>
      <section className="res">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-sm-12 col-lg-6">
              <h4 className="fw-bolder mb-5 mt-5">
                Prepare yourself for a quick response
              </h4>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <InputGroup>
                      <InputGroup.Text className="bordernone" id="basic-addon1">
                        <AiOutlineUser className="text-warning" />
                      </InputGroup.Text>

                      <Form.Control
                        className="bordernone"
                        required
                        type="text"
                        placeholder="Name*"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <InputGroup>
                      <InputGroup.Text className="bordernone" id="basic-addon1">
                        <HiOutlineMail className="mt-2 text-warning" />
                      </InputGroup.Text>

                      <Form.Control
                        className="bordernone"
                        required
                        type="text"
                        placeholder="Email Address*"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    className="mt-4"
                    controlId="validationCustom01"
                  >
                    <InputGroup>
                      <InputGroup.Text className="bordernone" id="basic-addon1">
                        <HiOutlinePhoneMissedCall className="mt-2 text-warning" />
                      </InputGroup.Text>

                      <Form.Control
                        className="bordernone"
                        required
                        type="text"
                        placeholder="Mobile Number*"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="6"
                    className="mt-4"
                    controlId="validationCustom01"
                  >
                    <InputGroup>
                      <InputGroup.Text className="bordernone" id="basic-addon1">
                        <AiOutlineAppstore className="mt-2 text-warning" />
                      </InputGroup.Text>

                      <Form.Select
                        className="bordernone"
                        aria-label="Default select example"
                      >
                        <option>Interested In</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="6"
                    className="mt-4"
                    controlId="validationCustom01"
                  >
                    <InputGroup>
                      <InputGroup.Text className="bordernone" id="basic-addon1">
                        <AiOutlineSkype className="mt-2 text-warning" />
                      </InputGroup.Text>

                      <Form.Control
                        className="bordernone"
                        required
                        type="text"
                        placeholder="Skype Id/WhatApp No.*"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="6"
                    className="mt-4"
                    controlId="validationCustom01"
                  >
                    <InputGroup>
                      <InputGroup.Text className="bordernone" id="basic-addon1">
                        <BsCurrencyDollar className="mt-2 text-warning" />
                      </InputGroup.Text>

                      <Form.Select
                        className="bordernone"
                        aria-label="Default select example"
                      >
                        <option>Selected Your Budget</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    className="mt-4"
                    controlId="validationCustom01"
                  >
                    <InputGroup>
                      <InputGroup.Text
                        className="bordermessage"
                        id="basic-addon1"
                      >
                        <BiMessageDetail className="text-warning" />
                      </InputGroup.Text>

                      <Form.Control
                        required
                        className="bordermessage"
                        type="text"
                        placeholder="MESSAGE*"
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationCustom01">
                    <InputGroup>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        required
                        type="text"
                        placeholder=""
                      />
                    </InputGroup>
                  </Form.Group>
                  <div className="d-flex justify-content-between mt-2 mb-4">
                    <div>
                      <button className="buttonnone fw-bolder">
                        <span className="add mx-1">
                          <MdOutlineAddCircleOutline />
                        </span>
                        ADD FILE
                      </button>
                    </div>
                    <div className="mt-1">
                      <input className="mx-1" type="checkbox" />
                      <span>
                        Yes, Send me a mutual NDA (Non-Disclosure Agreement)
                      </span>
                    </div>
                  </div>
                  <div className="row  ">
                    <div className="col-sm-7">
                      <div className="checkbox  p-3 d-flex justify-content-around  align self-center ">
                        <div>
                          <input className="mx-2" type="checkbox" />
                          <span>I'm not a robot</span>
                        </div>
                        <img src={Captcha} width={"10%"} alt="" />
                      </div>
                    </div>
                    <div className="col-sm-5 align-self-center text-lg-end text-md-end">
                      <Button className="p-3" variant="warning">
                        Send Your Inquiry
                      </Button>
                    </div>
                  </div>
                </Row>
              </Form>
            </div>
            <div className="stat col-sm-12 col-lg-5 p-5">
              <h4 className="text-white mb-5">Quick Stats</h4>
              <div className="row">
                <div className="col-sm-6 ">
                  <div className="d-flex">
                    <div>
                      <h4 className="text-warning fw-bolder">170+</h4>
                    </div>
                    <div>
                      <BsDatabaseAdd className="iconset mx-1" />
                    </div>
                  </div>
                  <p className="success text-white">Successful projects</p>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex">
                    <div>
                      <h4 className="text-warning fw-bolder">92%</h4>
                    </div>
                    <div>
                      <ImUsers className="iconset mx-1" />
                    </div>
                  </div>
                  <p className="success text-white">Client retention</p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-sm-6 ">
                  <div className="d-flex">
                    <div>
                      <h4 className="text-warning fw-bolder">$200M+</h4>
                    </div>
                    <div>
                      <GiRadioTower className="iconset mx-1" />
                    </div>
                  </div>
                  <p className="success text-white">Our clients overall</p>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex">
                    <div>
                      <h4 className="text-warning fw-bolder">1M+</h4>
                    </div>
                    <div>
                      <RiTimerLine className="iconset mx-1" />
                    </div>
                  </div>
                  <p className="success text-white">Work hours</p>
                </div>
              </div>
              <h4 className="text-white mt-5 mb-5">Top Executives</h4>
              <div className="d-flex text-white">
                <div className="text-center">
                  <img className="boss" src={Pcs} width={"80%"} alt="" />
                  <p className="linesr mt-1">Prakash Saini</p>
                  <p className="lines text-center">CTO</p>
                </div>
                <div className="text-center">
                  <img className="boss" src={Santoshsir} width={"80%"} alt="" />
                  <div>
                    <p className="linesr mt-2">Santosh Singh</p>
                    <p className="lines text-center">CEO</p>
                  </div>
                </div>
                <div className="text-center">
                  <img className="boss" src={Novamam} width={"80%"} alt="" />
                  <p className="linesr mt-2">Supernova C.</p>
                  <p className="lines text-center">CXO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Registration;
