import React from "react";
import "../ApplicationMaintenance.css";
import Accordion from "react-bootstrap/Accordion";
import { AccordionMock } from "../../../../mockup/AccordionMock";
const Frequently = () => {
  return (
    <>
      <div className="frequen-section">
        <div className="frequen container">
          <div className="row mb-5">
            <h2 className="text-center fw-bolder">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="row">
            {AccordionMock.map((item) => (
              <div className="col-lg-6">
                <Accordion className={`${item.Accordion} mt-4`}>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <h5>{item.heading}</h5>
                    </Accordion.Header>
                    <Accordion.Body className="accod">
                      {item.para}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Frequently;
