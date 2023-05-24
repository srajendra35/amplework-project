import React from "react";
import "../EnterpriseMobility.css";
import { Card } from "react-bootstrap";
import { Inhancemockup } from "../../../../mockup/Inhancemockup";

const InhanceRoi = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="enhanceheading">
            Enhance ROI With Our Customized Mobility Services
          </h2>
          <p className="enhancepara">
            Our tested & verified enterprise mobile app development services
            incorporate unique business solutions to empower corporations into
            the market. So, utilizing our solutions can gain competitive
            advantages to enhance your business growth.
          </p>
        </div>
        <div className="row">
          {Inhancemockup.map((item) => (
            <div className="col-lg-4">
              <Card className="mt-3">
                <div className="inhance-border">
                  <h5 className="cardinhance1">
                    <span className="fs-4 p-2 text-primary">{item.icon}</span>
                    {item.heading}
                  </h5>
                </div>
                <p className="cardinhancepara">{item.para}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default InhanceRoi;
