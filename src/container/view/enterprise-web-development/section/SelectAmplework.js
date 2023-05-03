import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Select } from "../../../../assets";
const SelectAmplework = () => {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-lg-6  ">
            <h2 className="reasons">Reasons To Select Amplework</h2>
            <p className="selectpara">
              At Amplework Software, we believe that every business deserves a
              robust, scalable and secure web application that can streamline
              their operations as well as enhance customer engagement rate. We
              incorporated the experienced team of web developers, UI/UX
              designers, QA engineers and project managers who can handle
              complex web development projects from start to finish. We leverage
              the latest technologies, frameworks and tools to build custom web
              applications that meet the unique needs of our clients. Whether
              you need a B2B portal, an e-commerce platform, a social network,
              or a CRM system, we can help you achieve your business goals with
              our enterprise web development services.
            </p>
          </div>
          <div className=" col-lg-6 ">
            <Card>
              <div className="row">
                <div className="col-lg-6 cardprop">
                  <h2 className="text-350">350+</h2>
                  <h6 className="project">Projects accomplished</h6>
                </div>

                <div className="textacc col-lg-6">
                  <h2 className="text-350">50+</h2>
                  <h6 className="project">Certified designers & developers</h6>
                </div>
              </div>

              <div className="col-lg-12">
                <img className="imgselect" src={Select} width={"100%"} alt="" />
              </div>
              <div className="row">
                <div className="col-lg-6 cardprop">
                  <h2 className="text-350">50M+</h2>
                  <h6 className="project">Revenue generated for clients </h6>
                </div>

                <div className="textacc col-lg-6">
                  <h2 className="text-350">5+ Years</h2>
                  <h6 className="project">
                    Average experience of our developers.
                  </h6>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default SelectAmplework;
