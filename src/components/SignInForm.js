import { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { signInUser } = UserAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const result = await signInUser({ email, password });

      if (result.success) {
        navigate("/dashboard");
      } else {
        setError(result.error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSignIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
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
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <div>
        <Form.Text className="text-danger">{error.message}</Form.Text>
      </div>

      <Button variant="primary" type="submit" disabled={loading}>
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

export default SignInForm;
