import React from "react";
import Ample from "../../assets/amplworkLogo.png";
import '../../container/view/pagecontent1/PageContent.css'

const Navbar = () => {
  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="container-fluid">
            <img src={Ample} width="15%" alt="Amplelogo" />

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="bg-warning rounded  navbar-toggler-icon"></span>
            </button>
            <div>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active text-white"
                      aria-current="page"
                      href="#"
                    >
                      Who we are
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active text-white"
                      aria-current="page"
                      href="#"
                    >
                      What we do
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active text-white"
                      aria-current="page"
                      href="#"
                    >
                      Our Culture
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active text-white"
                      aria-current="page"
                      href="#"
                    >
                      Work with us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active text-white"
                      aria-current="page"
                      href="#"
                    >
                      Case Studies
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active text-white"
                      aria-current="page"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active text-white"
                      aria-current="page"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>

                <button
                  className="btn btn-outline-warning fw-bolder rounded-pill"
                  type="submit"
                >
                  INQUIRE NOW
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
