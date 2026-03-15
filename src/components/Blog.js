import { Col, Row } from "react-bootstrap";
import Logo from "../assets/images/image_1.png";
import Logo1 from "../assets/images/image_2.png";
import Logo2 from "../assets/images/image_3.png";
import Logo7 from "../assets/images/logo/vector.png";

function Blog() {
  return (
    <Row className="blog-hero justify-content-center justify-content-lg-between">
      <Col
        xs={12}
        className="blog-hero_content align-items-center d-flex flex-column"
      >
        <h1>Caring is the new marketing</h1>
        <p style={{ maxWidth: "600px" }}>
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
      </Col>
      <Col md={4} className="text-center align-items-center    blog-card">
        <div className="blog-card_card ">
          <img src={Logo} alt="image_1" />
          <p>Creating Streamlined Safeguarding Processes with OneRen</p>
          <a
            href="https://example.com/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Readmore
          </a>
          <img src={Logo7} alt="vector" />
        </div>
      </Col>
      <Col md={4} className="text-center align-items-center  blog-card">
        <div className="blog-card_card">
          <img src={Logo1} alt="image_2" />
          <p>
            What are your safeguarding responsibilities and how can you manage
            them?
          </p>
          <a
            href="https://example.com/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Readmore
          </a>
          <img src={Logo7} alt="vector" />
        </div>
      </Col>
      <Col md={4} className="text-center align-items-center  blog-card">
        <div className="blog-card_card">
          <img src={Logo2} alt="image_3" />
          <p>Revamping the Membership Model with Triathlon Australia</p>
          <a
            href="https://example.com/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Readmore
          </a>
          <img src={Logo7} alt="vector" />
        </div>
      </Col>
    </Row>
  );
}

export default Blog;
