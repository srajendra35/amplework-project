import React from "react";
import "../EnterpriseWebDevelopment.css";
import { Card } from "react-bootstrap";
import { TechnologyStackmockup } from "../../../../mockup/TechnologyStackmockup";
const TechnologyStack = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="tech text-center mb-4">Technology Stacks</h2>
          <p className="techpara text-center">
            If your websites involve the activities of financial transactions
            then utilize the payment gateway to facilitate secure online
            payments. It enables customers to complete transactions using
            credit/debit cards,
          </p>
        </div>

        <div className="row">
          {TechnologyStackmockup.map((item) => (
            <Card className={item.cardclass}>
              <h5 className="front mb-4">{item.heading}</h5>
              <div className={`${item.language}`}>
                {item?.btn?.map((items) => (
                  <p className={`${item.lang} btn`}>{items.language}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
export default TechnologyStack;
