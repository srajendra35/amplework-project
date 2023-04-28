import React from "react";
import "../EnterpriseWebDevelopment.css";
import { Card } from "react-bootstrap";

const OverView = () => {
  return (
    <>
     
        <div className="container">
          <div className="row">
            <h6 className="overview fw-bolder">OVERVIEW</h6>
            <h3 className="enterpriseheading">
              Enterprise Web Development Services - Your Digital Success Partner
            </h3>
            <p className="with">
              With a team of experts related to web developers, designers and
              digital strategists - we offer customized solutions to businesses
              for empower their digital operations. We incorporate profound
              business strategies for commencing high-performance & scalable
              enterprise web solutions. Although, we can help you in creating
              competitive advantages to enhance your ROI. As per the reports,
              clients who incorporate frequent enterprise web services
              experience 3X or 4X growth in their customer engagement rate. As,
              customers also prepare to engage with those web applications which
              provide responses in minimal seconds.
            </p>
          </div>
          <div className="row">
            <div className="d-flex flex-wrap justify-content-center">
              <div className=" col-sm-12 col-md-6 col-lg-4 p-2">
                <Card className="bgcolors  align-self-center">
                  <h6 className="entercard">ENTERPRISE WEB DEVELOPMENT</h6>
                </Card>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 p-2">
                <Card className="bgcolors">
                  <h6 className="entercard">Enterprise Software Development</h6>
                </Card>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 p-2">
                <Card className="bgcolors">
                  <h6 className="entercard">Enterprise Portal Development</h6>
                </Card>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="d-flex flex-wrap justify-content-center">
              <div className="col-sm-12 col-md-6 col-lg-4 p-2">
                <Card className="bgcolors">
                  <h6 className="entercard ">Enterprise UI/UX Web Design</h6>
                </Card>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 p-2">
                <Card className="bgcolors">
                  <h6 className="entercard">
                    Hybrid Enterprise Web App Development
                  </h6>
                </Card>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 p-2">
                <Card className="bgcolors">
                  <h6 className="entercard">
                    Enterprise E-Commerce Development
                  </h6>
                </Card>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="d-flex flex-wrap justify-content-center">
              <div className="col-sm-12 col-md-6 col-lg-4 p-2">
                <Card className="bgcolors">
                  <h6 className="entercard ">Payment Gateway Integrations</h6>
                </Card>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 p-2">
                <Card className="bgcolors">
                  <h6 className="entercard">Content Management Solutions</h6>
                </Card>
              </div>
            </div>
          </div>
        </div>
   
    </>
  );
};
export default OverView;
