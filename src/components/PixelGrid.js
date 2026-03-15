import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Logo from "../assets/images/rafiki.png";

function PixelGrid() {
  const [click, setClick] = useState("");

  const handleClick = () => {
    alert("");
  };

  return (
    <Row className="pixelgrids">
      <Col className="col-sm-6">
        <img src={Logo} alt="Logo" />
      </Col>
      <Col className="pixelgrid-main col-sm-6 md-4">
        <h1>The unseen of spending three years at Pixelgrade</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button onClick={handleClick} className="solid-btn">
          Learn More
        </button>
      </Col>
    </Row>
  );
}

export default PixelGrid;
