import React from "react";
import { Row } from "react-bootstrap";
const Page404 = () => {
  return (
    <>
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <div className="container">
          <Row className="justify-content-center">
            <h1 className="float-start display-3 me-4">404</h1>
            <h4 className="pt-3">Oops! You{"'"}re lost.</h4>
            <p className="text-medium-emphasis float-start">
              The page you are looking for was not found.
            </p>
          </Row>
        </div>
      </div>
    </>
  );
};
export default Page404;
