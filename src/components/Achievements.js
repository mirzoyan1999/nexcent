import { Col, Row } from "react-bootstrap";
import Logo from "../assets/images/icon/icon-1.png";
import Logo1 from "../assets/images/icon/icon-2.png";
import Logo2 from "../assets/images/icon/icon-3.png";
import Logo3 from "../assets/images/icon/icon-4.png";

function Achievements() {
  return (
    <Row className="achievements">
      <Col sm={6} className="achievements-paragraph">
        <h1>
          Helping a local
          <br />
          <span style={{ color: "#4caf4f" }}>business reinvent itself</span>
        </h1>
        <p>We reached here with our hard work and dedication</p>
      </Col>

      <Col className="text-align-center">
        <Row>
          <Col
            md={6}
            className="align-items-center d-flex gap-2 achievements-item"
          >
            <img src={Logo} alt="icon-1" />
            <div className="d-flex flex-column justify-content-center">
              <h1 className="mb-0 m-0">2,245,341</h1>
              <p className="mb-0 m-0">Members</p>
            </div>
          </Col>

          <Col
            md={6}
            className="align-items-center d-flex gap-2 achievements-item"
          >
            <img src={Logo1} alt="icon-2" />
            <div className="d-flex flex-column justify-content-center">
              <h1>46,328</h1>
              <p>Clubs</p>
            </div>
          </Col>

          <Col
            md={6}
            className="align-items-center d-flex gap-2 mt-3 achievements-item"
          >
            <img src={Logo2} alt="icon-3" />
            <div className="d-flex flex-column justify-content-center">
              <h1>828,867</h1>
              <p>Event Bookings</p>
            </div>
          </Col>

          <Col
            md={6}
            className="align-items-center d-flex gap-2 mt-3 achievements-item"
          >
            <img src={Logo3} alt="icon-4" />
            <div className="d-flex flex-column justify-content-center">
              <h1>1,926,436</h1>
              <p>Payments</p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Achievements;
