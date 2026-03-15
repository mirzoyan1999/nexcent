import { Row, Col } from "react-bootstrap";
import Icon1 from "../assets/images/icon/icon-1.png";
import Icon2 from "../assets/images/icon/icon-2.png";
import Icon3 from "../assets/images/icon/icon-3.png";

const memberships = [
  {
    id: 1,
    image: Icon1,
    title: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id: 2,
    image: Icon2,
    title: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id: 3,
    image: Icon3,
    title: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];

function Membership() {
  return (
    <Row className="memberships">
      {memberships.map((membership) => (
        <Col
          xs={12}
          md={4}
          key={`Membership-${membership.id}`}
          className="membership"
        >
          <img className="img" src={membership.image} alt={membership.title} />
          <h3>{membership.title}</h3>
          <p>{membership.description}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Membership;
