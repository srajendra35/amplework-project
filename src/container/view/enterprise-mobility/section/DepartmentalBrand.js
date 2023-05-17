import React from "react";
import "../EnterpriseMobility.css";
import { Card } from "react-bootstrap";
import {
  Agronomy,
  Ball,
  Fintech,
  Graduation,
  Heartbeat,
  Key,
  Marketplace,
  Parmilahut,
  Trunk,
  Video,
  World,
  onlineshop,
} from "../../../../assets";
import CustomCard from "../../../../componects/customCard/CustomCard";
import { DepartmentMockup } from "../../../../mockup/DepartmentMockup";

const DepartmenatalBrand = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="departmentalheading">
            Brands we've collaborated with
          </h2>
          <p className="departpara">
            Our track record of collaborating with various brands speaks to our
            exceptional process-driven methodology and unparalleled technical
            know-how. You can trust Mindbowser to deliver top-notch results.
          </p>
        </div>
        <div className="departmentBrand-1">
          {DepartmentMockup.map((item) => {
            return (
              <CustomCard
                cardclass="departmentalhover"
                cardbody="text-center"
                imgclass="transimageblock"
                imgfirst='defaulttransport'
                image={item.image}
                img="img-fluid"
                heading={item.heading}
                headingclass=""
                para={item.para}
                paraclass="departmental-hover-para m-0"
              />
            );
          })}
        </div>
        
     
      

        {/* <div className="row">
          <div className="d-flex flex-wrap justify-content-center">
         
          
            
           
          </div>
        </div> */}
        {/* <div className="row">
          <div className="d-flex flex-wrap justify-content-center">
           
          
            <Card style={{ width: "18rem" }} className="departmentalhover m-2">
             
            <Card style={{ width: "18rem" }} className="departmentalhover m-2">
              <Card.Body className="text-center">
                <div className="defaulttransport">
                  <div className="transimageblock">
                    <img src={Agronomy} alt="" className="img-fluid p-2" />
                  </div>
                </div>
                <h5 className="py-2">AGRICULTURE</h5>
                <div className="departmental-hover-para">
                  <p>
                    Develop the agri-application for farmers so that they can
                    streamline their supply chain functions, get info about
                    crops, etc.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default DepartmenatalBrand;
