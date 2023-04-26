import React from "react";
import Navbar from "../navbar/Navbar";
import AppContent from "../AppContent";
import Footer from "../footer/Footer";
// import { Home } from "../../container";
import ToolTechnology from "../tooltechnology/ToolTechnology";
import Application from "../applicationperformance/Application";
const DefaultLayout = () => {
  return (
    <>
      <div>
        <Navbar />

        <div>
          <AppContent />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default DefaultLayout;
