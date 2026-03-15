import { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUpNewUser } = UserAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const result = await signUpNewUser({ email, password });

      if (result.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSignUp}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {loading ? (
          <>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </>
        ) : (
          "Submit"
        )}
      </Button>
    </Form>
  );
}

export default SignUpForm;
