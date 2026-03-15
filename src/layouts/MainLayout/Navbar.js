import { Row, Col } from "react-bootstrap";
import Logo from "../../assets/images/Logo.png";

function Navbar() {
  return (
    <Row className="navbar">
      <Col xs={6} sm={4} md={6} lg={3} xl={2}>
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </Col>

      <Col xs={6} sm={7} md={8} className="nav">
        <ul className="">
          <li>
            <a href="#home" target="_blank">
              Home
            </a>
          </li>
          <li>
            <a href="#service" target="_blank">
              Service
            </a>
          </li>
          <li>
            <a href="#feature" target="_blank">
              Feature
            </a>
          </li>
          <li>
            <a href="#product" target="_blank">
              Product
            </a>
          </li>
          <li>
            <a href="#testimonial" target="_blank">
              Testimonial
            </a>
          </li>
          <li>
            <a href="#faq" target="_blank">
              Faq
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  );
}

export default Navbar;
