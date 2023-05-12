import React from "react";
import { Analytics, Create, cool, higher } from "../../../../assets";
const BeneifitsEnterprise = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="benefits">
            Benefits of Enterprise Web Development Company For <br />
            Business Success
          </h2>
          <p className="benefitpara mb-5">
            Through enterprise website development agency, we effectively focus
            on re-structuring your website’s
            <br /> structure and adding specific features.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <h4 className="higher">Higher Scalability & Performance</h4>

            <p className="scable">
              Enterprise web development provides scalable and high-performing
              solutions that can handle growing business demands and traffic.
            </p>

            <h4 className="higher">Higher Scalability & Performance</h4>

            <p className="scable">
              Enterprise web development provides scalable and high-performing
              solutions that can handle growing business demands and traffic.
            </p>
            <h4 className="higher">Higher Scalability & Performance</h4>

            <p className="scable">
              Enterprise web development provides scalable and high-performing
              solutions that can handle growing business demands and traffic.
            </p>
          </div>

        
          <div className="col-lg-4  ">
            <div>
              <img src={cool} width={"100%"} alt="" />
            </div>
          </div>
          <div className="col-lg-4 ">
            <h4 className="enhance">Enhance Brand Authenticity </h4>

            <p className="well">
              A well-designed website can enhance your brand's credibility,
              establish trust with customers, and improve your overall brand
              authenticity.
            </p>
            <h4 className="enhance">Enhance Brand Authenticity </h4>

            <p className="well">
              A well-designed website can enhance your brand's credibility,
              establish trust with customers, and improve your overall brand
              authenticity.
            </p>
            <h4 className="enhance">Enhance Brand Authenticity </h4>

            <p className="well">
              A well-designed website can enhance your brand's credibility,
              establish trust with customers, and improve your overall brand
              authenticity.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="text-center">
            <img className="analytics" src={Analytics} alt="" />
          </div>
          <h4 className="text-center mt-4">Analytics & Tracking</h4>
          <p className="analticspara text-center">Integrating analytics & tracking effectively make sure to integrate key market <br/>measures for analysing about system performance & behaviour.</p>
        </div>
      </div>
    </>
  );
};
export default BeneifitsEnterprise;
