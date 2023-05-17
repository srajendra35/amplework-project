import React from "react";
import "../navbar/Navbar.css";
import { Ample } from "../../assets";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
const Navbars = () => {
  const Neviagte = useNavigate();
  return (
    <>
      <Navbar
        bg="transparent"
        expand="lg"
        style={{ position: "absolute" }}
        className="w-100"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={Ample} width={"250px"} alt="" />
          </Navbar.Brand>

          <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link className="navbartext" onClick={() => Neviagte("/")}>
                Who we are
              </Nav.Link>

              <Nav.Link
                className=" navbartext"
                onClick={() => Neviagte("About-us")}
              >
                What we do
              </Nav.Link>
              <Nav.Link
                className=" navbartext"
                onClick={() => Neviagte("our-culture")}
              >
                Our Culture
              </Nav.Link>
              <Nav.Link
                className="navbartext"
                onClick={() => Neviagte("services")}
              >
                Case Studies
              </Nav.Link>
              <Nav.Link
                className="navbartext"
                onClick={() => Neviagte("/")}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                className="navbartext me-5"
                onClick={() => Neviagte("services")}
              >
                Contact Us
              </Nav.Link>
              <Button className="ample-btn p-3"> INQUIRE NOW</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navbars;
