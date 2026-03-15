import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Modal, Nav } from "react-bootstrap";
import Navbar from "./Navbar";
import SignInForm from "../../components/SignInForm";
import { UserAuth } from "../../context/AuthContext";
import SignUpForm from "../../components/SignUpForm";
// import SignUp from "../../pages/auth/SignUp";

export default function Header() {
  const [showModal, setShowModal] = useState({
    isShow: false,
    key: null,
  });

  const { session } = UserAuth();
  console.log(session);

  const handleClose = () => setShowModal({ isShow: false, key: null });
  const handleShow = (key) => {
    setShowModal({ isShow: true, key });
  };

  return (
    <header className="header">
      <Navbar />

      <div className="header-actions">
        <div className="actions">
          {!session?.user?.email ? (
            <>
              <Button onClick={() => handleShow("sign-in")} className="login">
                Login
              </Button>
              <Button
                className="solid-btn"
                onClick={() => handleShow("sign-up")}
              >
                Sign Up
              </Button>
            </>
          ) : (
            <Nav.Link to="/dashboard" as={NavLink}>
              {session?.user?.email}
            </Nav.Link>
          )}
        </div>

        <Modal show={showModal.isShow} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {showModal.key === "sign-in" ? "Sign In" : "Sign Up"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {showModal.key === "sign-in" ? <SignInForm /> : <SignUpForm />}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </header>
  );
}
