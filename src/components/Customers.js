import { Col, Row } from "react-bootstrap";
import Logo from "../assets/images/tesla.png";
import Logo1 from "../assets/images/logo/logo-01.png";
import Logo2 from "../assets/images/logo/logo-2.png";
import Logo3 from "../assets/images/logo/logo-3.png";
import Logo4 from "../assets/images/logo/logo-1.png";
import Logo5 from "../assets/images/logo/logo-5.png";
import Logo6 from "../assets/images/logo/logo-6.png";
import Logo7 from "../assets/images/logo/vector.png";

function Customers() {
  return (
    <Row className="customers">
      <Col md={6}>
        <img src={Logo} alt="tesla" />
      </Col>
      <Col md={6} className=" customers-footer">
        <p>
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <h1>Tim Smith</h1>
        <p className="text">British Dragon Boat Racing Association</p>
        <div className="col d-flex gap-4 align-items-center partners-logo">
          <img src={Logo1} alt="logo-01" />
          <img src={Logo2} alt="logo-2" />
          <img src={Logo3} alt="logo-3" />
          <img src={Logo4} alt="logo-1" />
          <img src={Logo5} alt="logo-5" />
          <img src={Logo6} alt="logo-6" />
          <a
            href="https://example.com/customers"
            target="_blank"
            className="customers-link"
          >
            Meet all customers
            <img src={Logo7} alt="vector" />
          </a>
        </div>
      </Col>
    </Row>
  );
}

export default Customers;
