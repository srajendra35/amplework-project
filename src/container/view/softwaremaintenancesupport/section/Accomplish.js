import React from "react";
import "../Softwaremaintenancesupport.css";
import { Card } from "react-bootstrap";
import {
  Carbg,
  Code,
  Customer,
  Growth,
  Mobiletech,
  Surface,
} from "../../../../assets";
import { AccomplishMockup } from "../../../../mockup/Accomplishmockup";
import PrimaryText from "../../../../componects/primarytext/PrimaryText";
const Accomplish = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <PrimaryText
            heading="Accomplish Results With Top Software Maintenance Company"
            className="accomplish-heading"
          />

          <p className="accomplish-para">
            Build stable applications with custom software maintenance services
            that results into 100%
            <br /> business efficiency while enhancing the functionalities.
          </p>
        </div>
        <div className="row">
          <div className="d-flex flex-wrap justify-content-center">
            {AccomplishMockup.map((item) => (
              <Card
                style={{ width: "25rem", height: "18rem" }}
                className="departmentalhover m-2"
              >
                <Card.Body className="text-center">
                  <div className="defaulttransport">
                    <div className="transimageblock  mt-5">
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                  <div className="stableheading">
                    <h5 className="stable">{item.heading}</h5>
                  </div>

                  <div className="departmental-hover-para fs-5">
                    <p>{item.para}</p>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Accomplish;
