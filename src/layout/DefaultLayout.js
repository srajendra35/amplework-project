import React from "react";
import Navbar from "../componects/navbar/Navbar";
import AppContent from "../componects/AppContent";
import Footer from "../componects/footer/Footer";
 
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
