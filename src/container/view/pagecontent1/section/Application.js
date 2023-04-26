import React from "react";
import ApplicationCard from "../../../../componects/ApplicationCard";
import { Button, CardGroup } from "react-bootstrap";
import { FiMonitor } from "react-icons/fi";
import { DiPython } from "react-icons/di";
import { SiAtom } from "react-icons/si"
import '../../pagecontent1/PageContent.css'
const Application = () => {
  return (
    <>
      <div className="mt-5">
        <div className="container text-center">
          <h4 className="ours mb-4">
            Our Advanced Application Support Service-Elevate Your Application,s
            Performance
          </h4>
          <p className="text mb-4">
            complex Applications Which Are Configured With The Latest ApIs
            Require The Advanced Solutions To Keep The Working Mechanism
            <br /> Of The Applications In A Perfect Shape At Amplework
          </p>
          <CardGroup>
            <ApplicationCard
              icon={<FiMonitor />}
              heading="Application Re-engineering"
              paragrapha="  Our developers evaluate existing applications through a series of
            in-house testing processes in order to evaluate the functionalities
            of the applications that need to be re-engineered."
              backgroundColor="rgb(47 126 255)"
            />

            <ApplicationCard
              icon={<DiPython />}
              heading="Application Migration & Integration"
              paragrapha="Our engineers are profound in supporting you for moving applications from physical or local settings to remote based servers. We also provide application migration as well as integration services."
              backgroundColor="rgb(17 95 224)"
            />

            <ApplicationCard
              icon={<SiAtom />}
              heading="Application Support"
              paragrapha="It includes a range of activities for ensuring proper functioning and optimization of a web or mobile application. We focus towards continuous monitoring and continuous improvement of functions."
              backgroundColor="
rgb(4 80 206)"
            />
          </CardGroup>
          <Button
            className="freequitebtn fw-bolder text-white"
            variant="warning"
          >
            Get a Free Quote
          </Button>
        </div>
      </div>
    </>
  );
};
export default Application;
