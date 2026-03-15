import { Button } from "react-bootstrap";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const { session, signOut } = UserAuth();

  const handleLogOut = () => {
    signOut();
    navigate("/sign-in");
  };

  return (
    <>
      <h1>Hello {session?.user?.email}</h1>

      <Button onClick={handleLogOut}>Logout</Button>
    </>
  );
}

export default Dashboard;
