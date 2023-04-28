import React from "react";
import "../EnterpriseWebDevelopment.css";
import { Card } from "react-bootstrap";
import { Coding, Digital, Repair, Security } from "../../../../assets";
const Capabilities = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 align-self-center">
            <h2 className="coreheading1">Our Core Capabilities</h2>
            <p className="corepara1">
              Our core capabilities are rooted in delivering innovative and
              custom solutions that meet the unique needs of each of our
              clients.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row justify-content-between">
              <div className="col-lg-5 col-md-6">
                <div>
                  <Card className="cardpadding">
                    <div>
                      <img className="digital" src={Digital} alt="" />
                    </div>
                    <h5 className="cardheading2">
                      Enterprise <br /> Development Solutions
                    </h5>
                    <p className="corepara2">
                      Our custom enterprise development solutions are designed
                      to meet the
                    </p>
                  </Card>
                </div>
                <div className="mt-3">
                  <Card className="cardpadding">
                    <div>
                      <img className="digital" src={Coding} alt="" />
                    </div>
                    <h5 className="cardheading2">Developers <br/>For Hire</h5>
                    <p className="corepara2 mt-2">
                      Our developers for hire services provide you with access
                      to topy...
                    </p>
                  </Card>
                </div>
              </div>

              <div className="col-lg-5 col-md-6">
                <div className="mt-5">
                  <Card className="cardpadding">
                    <div>
                      <img className="digital" src={Security} alt="" />
                    </div>
                    <h5 className="cardheading2">Security <br/>Management</h5>
                    <p className="corepara2 mt-2">
                    Our mobile application development services are focused on creating...
                    </p>
                  </Card>
                </div>
                <div className="mt-3">
                  <Card className="cardpadding">
                    <div>
                      <img className="digital" src={Repair} alt="" />
                    </div>
                    <h5 className="cardheading2">
                    Mobile Maintenance Services
                    </h5>
                    <p className="corepara2 mt-2">
                    Our mobile application development services are focused on creating...
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Capabilities;
