import { Button, Col, Row } from "react-bootstrap";
import Logo from "../assets/images/logo/vector-2.png";

function SectionText() {
  const handleClick = () => {
    alert("Get a Demo");
  };

  return (
    <Row className="section-text justify-content-center">
      <h1>
        Pellentesque suscipit <br /> fringilla libero eu.
      </h1>
      <Button className="solid-btn" onClick={handleClick}>
        Get a Demo
        <div className="vector">
          <img src={Logo} alt="vector-2"/>
        </div>
      </Button>
    </Row>
  );
}

export default SectionText;
