import React from "react";
import Carousel from "react-bootstrap/Carousel";
import MenNoteBook from "../assets/images/men-notebook.png";
import { Button, Col, Image, Row } from "react-bootstrap";

export default function FirstBlock() {
  const handleClick = () => {
    alert("Registered!");
  };

  return (
    <Carousel className="carusel-header"   controls={false} interval={3000}>
      <Carousel.Item>
        <Row className="carusel-lessons">
          <Col sm={8} className="carusel-container" style={{marginTop: "65px"}}>
            <h3 className="lessons">
              <span>Lessons and insights</span>
              <span className="years">from 8 years</span>
            </h3>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <Button className="solid btn" onClick={handleClick}>
              Register
            </Button>
          </Col>

          <Col sm={4}>
            <Image src={MenNoteBook} alt="Third slide" fluid />
          </Col>
        </Row>
      </Carousel.Item>

      <Carousel.Item>
        <Row  className="carusel-lessons">
          <Col sm={8} className="carusel-container" style={{marginTop: "65px"}}>
            <h3 className="lessons">
              <span>Lessons and insights</span>
              <span className="years">from 8 years</span>
            </h3>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <Button className="solid btn" onClick={handleClick}>
              Register
            </Button>
          </Col>

          <Col sm={4}>
            <Image src={MenNoteBook} alt="Third slide" fluid />
          </Col>
        </Row>
      </Carousel.Item>

      <Carousel.Item>
        <Row  className="carusel-lessons">
          <Col sm={8} className="carusel-container" style={{marginTop: "65px"}}>
            <h3 className="lessons">
              <span>Lessons and insights</span>
              <span className="years">from 8 years</span>
            </h3>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <Button className="solid btn" onClick={handleClick}>
              Register
            </Button>
          </Col>

          <Col sm={4}>
            <Image src={MenNoteBook} alt="Third slide" fluid />
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}
