import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "./container/pages/Page404";
import Page500 from "./container/pages/Page500";
import DefaultLayout from "./layout/DefaultLayout.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route exact path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
