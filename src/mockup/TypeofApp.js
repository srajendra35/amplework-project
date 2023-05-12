import React from "react";
import {
  AiFillAccountBook,
  AiFillCodepenCircle,
  AiFillDashboard,
} from "react-icons/ai";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { HiDeviceTablet } from "react-icons/hi";
import { IoIosBrowsers } from "react-icons/io";
import { SiEnterprisedb } from "react-icons/si";
import { SlGameController } from "react-icons/sl";

export const TypeofApp = [
  {
    icon: <AiFillCodepenCircle className="fs-1" />,
    heading: "Web Apps",
    para: "We conduct maintenance of applications that run within a web browser and can be accessed through the internet",
  },
  {
    icon: <AiFillAccountBook className="fs-1" />,
    heading: "Cloud Apps & SaaS app",
    para: "Maintenance of apps that run on remote servers & utilize cloud-enabled resources for data storage, processing & scalability.",
  },
  {
    icon: <SiEnterprisedb className="fs-1" />,
    heading: "Enterprise Apps values ",
    para: "Apps that are customized for handling enterprise-related functions within different departments - these apps include complex functionalities. ",
  },
  {
    icon: <HiDeviceTablet className="fs-1" />,
    heading: "AR/VR  maintenance ",
    para: "For the smooth operation of functions, the virtual elements of AR/VR applications need to keep upgrading with the latest technologies.  ",
  },
  {
    icon: <BsDatabaseFillAdd className="fs-1" />,
    heading: "Database Apps ",
    para: "Keep your database always on track with profound database application-enabled functionalities - so keep your apps in shape.  ",
  },
  {
    icon: <IoIosBrowsers className="fs-1" />,
    heading: "AI/ML Apps ",
    para: "Increasing use of Al/ML apps also evolved the regular maintenance of predictive analytics, anomaly detection and more. ",
  },
  {
    icon: <SlGameController className="fs-1" />,
    heading: "Gaming Apps",
    para: "Maintain the immense user experience through comprehensive support for all aspects of gaming apps to ensure smooth runs of applications ",
  },
  {
    icon: <AiFillDashboard className="fs-1" />,
    heading: "Hybrid Apps",
    para: "Maintain the apps that work on the native as well as web-enabled environments including debugging, error tracking and more.",
  },
];
