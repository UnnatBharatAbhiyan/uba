import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Row,
  Col,
  Image,
  Container,
} from "react-bootstrap";
import iitrlogo from "../../../Images/iitrlogo.png";
import ubalogo from "../../../Images/ubalogo.png";
import "../css/Header.css";
export const Header = () => {
  return (
    <>
      <header className="kuchbhi2">
        <Container className="kuchbhi2" fluid>
          <Row
            className="header-part"
            style={{ background: "#03506f", height: "1.3rem" }}
          ></Row>
          <Container className="my-3">
            <Row>
              <Col className="text-center" md={3}>
                <a href="https://www.iitr.ac.in/">
                  <img src={iitrlogo} alt="logo img" />
                </a>
              </Col>
              <Col md={6}>
                <Row className="text-center">
                  <h3>उन्नत भारत अभियान</h3>
                </Row>
                <Row className="text-center">
                  <h3>UNNAT BHARAT ABHIYAN</h3>{" "}
                </Row>
                <Row className="text-center">
                  <h3>IIT Roorkee</h3>{" "}
                </Row>
              </Col>
              <Col className="text-center" md={3}>
                <a to="/home">
                  <img src={ubalogo} alt="logo img" />
                </a>
              </Col>
            </Row>
          </Container>
        </Container>
        <Navbar
          className="navBar"
          style={{ background: "#ecc731" }}
          expand="lg"
        >
          <Container className="navContainer">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="mx-3" href="/">
                  Home
                </Nav.Link>
                {/* <NavDropdown
                  className="mx-3"
                  title="Initiatives"
                  id="basic-nav-dropdown"
                  renderMenuOnMount={true}
                >
                  <NavDropdown.Item to="#action/3.1">
                    Education
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item to="#action/3.2">Health</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item to="#action/3.3">
                    Technology
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item to="#action/3.4">
                    Awareness
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item to="#action/3.5">Other</NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link className="mx-3" href="/initiatives">
                  Initiatives
                </Nav.Link>

                <NavDropdown
                  className="mx-3"
                  title="Clusters"
                  id="basic-nav-dropdown"
                  renderMenuOnMount={true}
                >
                  <NavDropdown.Item href="/beladi">
  <button  title="Beladi-Salhapur" data-toggle="popover" data-trigger="hover" className="text-dark btn btn">Beladi</button>
</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/chharba">
                  
  <button  title="Chharba, Jhabarpur" data-toggle="popover" data-trigger="hover" className="text-dark btn btn">Chharba</button>

                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/chandpur">
                  <button  title="Chandpur-Khurd, Chandpur-Kala, Horawala" data-toggle="popover" data-trigger="hover" className="text-dark btn btn" >
                    Chandpur
                  </button>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/meerpur"><button  title="Meerpur-Muwazarpur" data-toggle="popover" data-trigger="hover" className="text-dark btn btn">Meerpur</button></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/puranpur"><button  title="Puranpur-Salhapur" data-toggle="popover" data-trigger="hover" className="text-dark btn btn">Puranpur</button></NavDropdown.Item>
                </NavDropdown>

                <Nav.Link className="mx-3" href="/events">
                  Events
                </Nav.Link>

                <NavDropdown
                  className="mx-3"
                  title="Teams"
                  id="basic-nav-dropdown"
                  renderMenuOnMount={true}
                >
                  <NavDropdown.Item href="/faculty">
                    Faculty
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/studentteam">Current Student Team</NavDropdown.Item>
                <NavDropdown.Divider />
                  <NavDropdown.Item href="/studentteam21-22">Student Team 2021-22</NavDropdown.Item>
                <NavDropdown.Divider />
                  <NavDropdown.Item href="/studentteam20-21">Student Team 2020-21</NavDropdown.Item>
                </NavDropdown>

                {/* <Nav.Link className="mx-3" href="/gallery">
                  Gallery
                </Nav.Link> */}

                <Nav.Link className="mx-3" href="/contact">
                  Contact
                </Nav.Link>

                <Nav.Link className="mx-3" href="https://samarthyauba.iitr.ac.in/">
                  Samarthya
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};
