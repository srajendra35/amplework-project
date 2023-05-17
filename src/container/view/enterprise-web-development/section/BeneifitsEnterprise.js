import React from "react";
import {
  Analysis2,
  Analytics,
  Bands,
  Create,
  G15,
  Response,
  Search,
  Twomen,
  cool,
  higher,
} from "../../../../assets";
const BeneifitsEnterprise = () => {
  return (
    <>
      <div className="container-fluid">
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
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className=" d-flex">
              <figure>
                <h4 className="higher">Higher Scalability & Performance</h4>
                <p className="scable">
                  Enterprise web development provides scalable and
                  high-performing solutions that can handle growing business
                  demands and traffic.
                </p>
              </figure>
              <div className="text-center p-2 mx-3 img-higherbenifit">
                <img src={higher} className="img-fluid mt-2" alt="" />
              </div>
            </div>
            <div className="d-flex">
              <figure>
                <h4 className="higher">Optimize Your SEO</h4>
                <p className="scable">
                  Now, optimize your website for search engines, making it
                  easier for potential customers to find to reach at your
                  business in a minimal time.
                </p>
              </figure>
              <div className="text-center p-2 mx-3 img-higherbenifit1">
                <img src={Search} className="img-fluid mt-2" alt="" />
              </div>
            </div>
            <div className="d-flex">
              <figure>
                <h4 className="higher">Higher Scalability & Performance</h4>
                <p className="scable">
                  Enterprise web development provides scalable and
                  high-performing solutions that can handle growing business
                  demands and traffic.
                </p>
              </figure>
              <div className="text-center p-2 mx-3 img-higherbenifit2">
                <img src={G15} className="img-fluid mt-2" alt="" />
              </div>
            </div>
          </div>

          <div className="col-lg-2">
            <img src={cool} className="img-fluid " alt="" />
          </div>
          <div className="  col-lg-4">
            <div className="d-flex enhance-reverse">
              <figure>
                <h4 className="enhance">Enhance Brand Authenticity </h4>
                <p className="well">
                  A well-designed website can enhance your brand's credibility,
                  establish trust with customers, and improve your overall brand
                  authenticity.
                </p>
              </figure>
              <div className="text-center p-2 mx-3 img-higherbenifit3">
                <img src={Bands} className="img-fluid mt-2 " alt="" />
              </div>
            </div>
            <div className="d-flex enhance-reverse">
              <figure>
                <h4 className="enhance">Enhance User-Friendliness</h4>
                <p className="well">
                  Intuitive and user-friendly interfaces that enhance the user
                  experience, leading to increased engagement and conversions.
                </p>
              </figure>
              <div className="text-center p-2 mx-3 img-higherbenifit4">
                <img src={Twomen} className="img-fluid mt-2 " alt="" />
              </div>
            </div>

            <div className="d-flex enhance-reverse">
              <figure>
                <h4 className="enhance">Enhance Brand Authenticity </h4>
                <p className="well">
                  A well-designed website can enhance your brand's credibility,
                  establish trust with customers, and improve your overall brand
                  authenticity.
                </p>
              </figure>
              <div className="text-center p-2 mx-3 img-higherbenifit5">
                <img src={Response} className=" img-fluid mt-2" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text-center">
            <img className="analytics" src={Analytics} alt="" />
          </div>
          <h4 className="text-center mt-4">Analytics & Tracking</h4>
          <p className="analticspara text-center">
            Integrating analytics & tracking effectively make sure to integrate
            key market <br />
            measures for analysing about system performance & behaviour.
          </p>
        </div>
      </div>
    </>
  );
};
export default BeneifitsEnterprise;
