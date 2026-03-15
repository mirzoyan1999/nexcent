import { Image, Row, Col } from "react-bootstrap";
import Logo from "../assets/images/logo/logo-1.png";
import Logo1 from "../assets/images/logo/logo-2.png";
import Logo2 from "../assets/images/logo/logo-3.png";
import Logo3 from "../assets/images/logo/logo-4.png";
import Logo4 from "../assets/images/logo/logo-5.png";
import Logo5 from "../assets/images/logo/logo-6.png";
import Logo6 from "../assets/images/logo/logo-7.png";

const clients = [Logo, Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

function Client() {
  return (
    <Row className="clients">
      <Col className="col-md-12">
        <h1>Our Clients</h1>
        <p>We have been working with some Fortune 500+ clients</p>
      </Col>

      <Col className="clients-logo col-12">
        {clients.map((client, index) => (
          <Image
            key={`Client-${index}`}
            src={client}
            alt={`Logo-${index}`}
            draggable={false}
          />
        ))}
      </Col>
    </Row>
  );
}

export default Client;
