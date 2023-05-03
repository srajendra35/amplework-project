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
        <div className="row">
          <div className="d-flex flex-wrap justify-content-center">
            <Card style={{ width: "18rem" }} className="departmentalhover m-2">
              <Card.Body className="text-center">
                <div className="defaulttransport">
                  <div className="transimageblock">
                    <img src={Fintech} alt="" className="img-fluid p-2" />
                  </div>
                </div>
                <h5 className="py-2">FINTECH</h5>
                <div className="departmental-hover-para">
                  <p>
                    Develop a fin-tech application that represents your brand’s
                    reputation and enhances your brand’s presence in the market.
                  </p>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="departmentalhover m-2">
              <Card.Body className="text-center">
                <div className="defaulttransport">
                  <div className="transimageblock">
                    <img src={Trunk} alt="" className="img-fluid p-2" />
                  </div>
                </div>
                <h5 className="py-2">TRANSPORT</h5>
                <div className="departmental-hover-para">
                  <p>
                    Streamline your logistics and transportation operations with
                    our transport application building services - update your
                    logistics units.
                  </p>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="departmentalhover m-2">
              <Card.Body className="text-center">
                <div className="defaulttransport">
                  <div className="transimageblock">
                    <img src={World} alt="" className="img-fluid p-2" />
                  </div>
                </div>
                <h5 className="py-2">TRAVEL</h5>
                <div className="departmental-hover-para">
                  <p>
                    Leverage your travel business growth by providing the
                    facility to users for booking online tickets, hotel booking,
                    itinerary planning services, etc.
                  </p>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="departmentalhover m-2">
              <Card.Body className="text-center">
                <div className="defaulttransport">
                  <div className="transimageblock">
                    <img src={Heartbeat} alt="" className="img-fluid p-2" />
                  </div>
                </div>
                <h5 className="py-2">HEALTHCARE</h5>
                <div className="departmental-hover-para">
                  <p>
                    Bring your idea to life by developing a healthcare
                    application for better patient management, prescription
                    details, etc.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-wrap justify-content-center">
            <Card style={{ width: "18rem" }} className="departmentalhover m-2">
              <Card.Body className="text-center">
                <div className="defaulttransport">
                  <div className="transimageblock">
                    <img src={Marketplace} alt="" className="img-fluid p-2" />
                  </div>
                </div>
                <h5 className="py-2">MARKETPLACE</h5>
                <div className="departmental-hover-para">
                  <p>
                    Now, buildup an online market to connect all your buyers &
                    sellers into an integrated platform for enhancing your
                    revenue growth.
                  </p>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="departmentalhover m-2">
              <Card.Body className="text-center">
                <div className="defaulttransport">
                  <div className="transimageblock">
                    <img src={Parmilahut} alt="" className="img-fluid p-2" />
                  </div>
                </div>
                <h5 className="py-2">FASION</h5>
                <div className="departmental-hover-para">
                  <p>
                    Give a boost to your education and learning platform for
                    enhancing your user experience in an integrated platform.
                  </p>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="departmentalhover m-2">
              <Card.Body className="text-center">
                <div className="defaulttransport">
                  <div className="transimageblock">
                    <img src={Graduation} alt="" className="img-fluid p-2" />
                  </div>
                </div>
                <h5 className="py-2">EDUCATION</h5>
                <div className="departmental-hover-para">
                  <p>
                    Give a platform to your audiences for buying/selling
                    multiple items without facing any downtime errors.
                  </p>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="departmentalhover m-2">
              <Card.Body className="text-center">
                <div className="defaulttransport">
                  <div className="transimageblock">
                    <img src={onlineshop} alt="" className="img-fluid p-2" />
                  </div>
                </div>
                <h5 className="py-2">E-COMMERCE</h5>
                <div className="departmental-hover-para">
                  <p>
                    Give a platform to your audiences for buying/selling
                    multiple items without facing any downtime errors.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-wrap justify-content-center">
            <Card style={{ width: "18rem" }} className="departmentalhover m-2">
              <Card.Body className="text-center">
                <div className="defaulttransport">
                  <div className="transimageblock">
                    <img src={Key} alt="" className="img-fluid p-2" />
                  </div>
                </div>
                <h5 className="py-2">RENTAL</h5>
                <div className="departmental-hover-para">
                  <p>
                    Launch a mobile application that caters to fulfilling the
                    rising demand for your real estate audiences effectively.
                  </p>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="departmentalhover m-2">
              <Card.Body className="text-center">
                <div className="defaulttransport">
                  <div className="transimageblock">
                    <img src={Video} alt="" className="img-fluid p-2" />
                  </div>
                </div>
                <h5 className="py-2">ENTERTAINMENT</h5>
                <div className="departmental-hover-para">
                  <p>
                    Provide a reliable platform to your users to enable them in
                    connecting through any corner of the world.
                  </p>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="departmentalhover m-2">
              <Card.Body className="text-center">
                <div className="defaulttransport">
                  <div className="transimageblock">
                    <img src={Ball} alt="" className="img-fluid p-2" />
                  </div>
                </div>
                <h5 className="py-2">SPORTS</h5>
                <div className="departmental-hover-para">
                  <p>
                    Application for users to ease their way into getting information regarding team members, sports statistics, new scores and many more.
                  </p>
                </div>
              </Card.Body>
            </Card>
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
        </div>
      </div>
    </>
  );
};
export default DepartmenatalBrand;
