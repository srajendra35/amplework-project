import React from "react";
import "../EnterpriseMobility.css";
import {
  Dots,
  Lanuching,
  Layers,
  Processcard,
  Running,
  Study,
  StudyTime,
} from "../../../../assets";
const DifferentPlatform = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="processheading">
            "Our Process For Enterprise Mobile App Development Process"
          </h2>
          <p className="processpara">
            For enterprise mobile application development, we incorporate
            human-catered design philosophy for intuitive
            <br /> solutions to empower the digital age.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img src={Layers} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6">
            <div className="d-flex">
              <div>
                <figure className="one mb-0 ms-md-3 rounded-circle">01</figure>
                <div className="horizontal_dotted_line"></div>
              </div>
              <div>
                <h5 className="gathering mt-4">Gathering Requirements</h5>
                <ul>
                  <li className="identify">
                    <img className="" src={Dots} width={15} />
                    &nbsp; Identifying your goals.
                  </li>
                  <li className="identify">
                    <img className="" src={Dots} width={15} />
                    &nbsp;Determine features and functionalities.
                  </li>
                  <li className="identify">
                    <img className="" src={Dots} width={15} />
                    &nbsp;"Drafting proposal document.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mt-5">
            <h5 className="gathering mt-4">Selecting Platforms</h5>
            <ul>
              <li className="identify">
                <img className="" src={Dots} width={15} />
                &nbsp; Screenflow strategy.
              </li>
              <li className="identify">
                <img className="" src={Dots} width={15} />
                &nbsp; Creating wireframe solutions.
              </li>
              <li className="identify">
                <img className="" src={Dots} width={15} />
                &nbsp;Designing the UI.
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-between">
              <div>
                <figure className="one2 mb-0 ms-md-3 rounded-circle">02</figure>
                <div className="horizontal_dotted_line"></div>
              </div>
              <div>
                <img src={Study} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img src={StudyTime} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6">
            <div className="d-flex">
              <div>
                <figure className="one3 mb-0 ms-md-3 rounded-circle">03</figure>
                <div className="horizontal_dotted_line"></div>
              </div>
              <div>
                <h5 className="gathering mt-4">Development phase</h5>
                <ul>
                  <li className="identify">
                    <img className="" src={Dots} width={15} />
                    &nbsp; Analysing project phases.
                  </li>
                  <li className="identify">
                    <img className="" src={Dots} width={15} />
                    &nbsp; Magnifying new inputs.
                  </li>
                  <li className="identify">
                    <img className="" src={Dots} width={15} />
                    &nbsp; Accomplishing KPIs.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mt-5">
            <h5 className="gathering mt-4">Quality Assurance</h5>
            <ul>
              <li className="identify">
                <img className="" src={Dots} width={15} />
                &nbsp; Testing the application.
              </li>
              <li className="identify">
                <img className="" src={Dots} width={15} />
                &nbsp; Sharing specific reports.
              </li>
              <li className="identify">
                <img className="" src={Dots} width={15} />
                &nbsp; Awaiting client approval.
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-between">
              <div>
                <figure className="one4 mb-0 ms-md-3 rounded-circle">04</figure>
                <div className="horizontal_dotted_line"></div>
              </div>
              <div>
                <img src={Processcard} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img src={Lanuching} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6">
            <div className="d-flex">
              <div>
                <figure className="one5 mb-0 ms-md-3 rounded-circle">05</figure>
                <div className="horizontal_dotted_line"></div>
              </div>
              <div>
                <h5 className="gathering mt-4">Final Deployment</h5>
                <ul>
                  <li className="identify">
                    <img className="" src={Dots} width={15} />
                    &nbsp; Deployment app on the server.
                  </li>
                  <li className="identify">
                    <img className="" src={Dots} width={15} />
                    &nbsp; Launching the application.
                  </li>
                  <li className="identify">
                    <img className="" src={Dots} width={15} />
                    &nbsp; Post-launch the support.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mt-5">
            <h5 className="gathering mt-4">Post-Maintenance</h5>
            <ul>
              <li className="identify">
                <img className="" src={Dots} width={15} />
                &nbsp; Customized Tech Solutions.
              </li>
              <li className="identify">
                <img className="" src={Dots} width={15} />
                &nbsp; Analyzing of Feedback.
              </li>
              <li className="identify">
                <img className="" src={Dots} width={15} />
                &nbsp; Smooth running of apps.
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-between">
              <div>
                <figure className="one6 mb-0 ms-md-3 rounded-circle">06</figure>
                <div className="horizontal_dotted_line"></div>
              </div>
              <div>
                <img src={Running} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DifferentPlatform;
