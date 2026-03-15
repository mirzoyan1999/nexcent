import { Col, Row } from "react-bootstrap";
import Logo from "../assets/images/pana.png";

function Calendar() {
  const handleclick = () => {
    alert("Learn More");
  };

  return (
    <Row className="row calendar align-items-center">
      <Col className="col-md-6">
        <img src={Logo} alt="pana" />
      </Col>
      <Col className="col-md-6 calendar-footer">
        <h1>How to design your site footer like we did</h1>
        <p>
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button onClick={handleclick} className="solid-btn">
          Learn More
        </button>
      </Col>
    </Row>
  );
}

export default Calendar;
