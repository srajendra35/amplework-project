import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import Page404 from "./container/pages/Page404";
import Page500 from "./container/pages/Page500";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            {routes.map((route, idx) => {
              return (
                route.element && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={<route.element />}
                  />
                )
              );
            })}

            <Route exact path="/404" name='Page 404' element={<Page404 />} />
            <Route exact path="/500" name='Page 500' element={<Page500 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
