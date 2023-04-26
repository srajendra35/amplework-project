import React from "react";
import '../../pagecontent1/PageContent.css'
import { Card } from "react-bootstrap";
const Business = () => {
  return (
    <>
      <div className="business">
        <div className="container">
          <div className="row">
            <h4 className="busihaeding">
              Our Numbers Speaks For Our Business Operations
            </h4>
            <p className="busipara">
              We don’t compromise on the quality aspects thus it makes us the
              leading application development maintenance and support service
              provider.
              <br /> We resolve even the most severe incidents in less than 8
              hours.
            </p>
          </div>
          <div className="row mt-5">
            <div className="d-flex flex-wrap  mb-5 justify-content-center">
              <div className="mx-5">
                <Card>
                  <Card.Body>
                    <Card.Title className="titlecolor fw-bolder text-center">10-15 Mins</Card.Title>
                    <Card.Text className="title text-center">
                      Minimum incident Response Time
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="mx-5">
                <Card>
                  <Card.Body>
                    <Card.Title className="titlecolor fw-bolder text-center">2-3 Hours</Card.Title>
                    <Card.Text className="title text-center">
                      incident Solution Time
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="mx-5">
                <Card>
                  <Card.Body>
                    <Card.Title className="titlecolor fw-bolder text-center">350+</Card.Title>
                    <Card.Text className="title text-center">
                      Prowess Team Members
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="mx-5">
                <Card>
                  <Card.Body>
                    <Card.Title className="titlecolor fw-bolder text-center">100%</Card.Title>
                    <Card.Text className="title text-center">
                      With Quality Optimization
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Business;
