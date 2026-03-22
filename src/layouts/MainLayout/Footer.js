import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../assets/images/socials-1.png";
import Logo1 from "../../assets/images/socials-2.png";
import Logo2 from "../../assets/images/socials-3.png";
import Logo3 from "../../assets/images/socials-4.png";
import Logo4 from "../../assets/images/vector.png";
import Logo5 from "../../assets/images/Logo.png";

function Footer() {
  return (
    <footer className="footer py-4">
      <Container className="footer_header">
        <Row className="footer_content d-flex justify-content-between flex-wrap align-items-start">
          <Col xs={5}>
            <Row className="mb-3 text-center text-md-start">
              <Col xs={12} >
                <img src={Logo5} alt="Logo"/>
                <p className="mb-0">Copyright © 2020 Nexcent ltd.</p>
                <p className="mb-0">All rights reserved</p>
              </Col>
              <Col className="d-flex social-icons  mb-3 mb-md-0">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-2"
                >
                  <div className="social_icons">
                    <img src={Logo} alt="socials-1" />
                  </div>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-2"
                >
                  <div className="social_icons">
                    <img src={Logo1} alt="socials-2" />
                  </div>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-2"
                >
                  <div className="social_icons">
                    <img src={Logo2} alt="socials-3" />
                  </div>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <div className="social_icons">
                    <img src={Logo3} alt="socials-4" />
                  </div>
                </a>
              </Col>
            </Row>
          </Col>

          <Col xs={2} className="company mb-3 mb-md-0">
            <h6>Company</h6>
            <a
              href="#"
              className="d-block mb-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              About us
            </a>
            <a
              href="#"
              className="footer-link d-block mb-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
            <a
              href="#"
              className="footer-link d-block mb-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact us
            </a>
            <a
              href="#"
              className="footer-link d-block mb-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pricing
            </a>
            <a
              href="#"
              className="footer-link d-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Testimonials
            </a>
          </Col>

          <Col xs={2} className="company">
            <h6>Support</h6>
            <a
              href="#"
              className="d-block mb-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Help center
            </a>
            <a
              href="#"
              className="footer-link d-block mb-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of service
            </a>
            <a
              href="#"
              className="footer-link d-block mb-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Legal
            </a>
            <a
              href="#"
              className="footer-link d-block mb-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy policy
            </a>
            <a
              href="#"
              className="footer-link d-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Status
            </a>
          </Col>

          <Col xs={3} className="footer_email">
            <h6>Stay up to date</h6>
            <div className="email">
              <img src={Logo4} alt="vector" />
              <input
                type="email"
                name="subscribe-email"
                placeholder="Your email address"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
