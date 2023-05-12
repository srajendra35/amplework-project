import React from "react";
import AppContent from "../componects/AppContent";
import Footer from "../componects/footer/Footer";
import Navbars from "../componects/navbar/Navbar";

const DefaultLayout = () => {
  return (
    <>
      <div>
        <Navbars />
        <div>
          <AppContent />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default DefaultLayout;
