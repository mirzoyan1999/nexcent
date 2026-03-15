import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignIn from "./pages/auth/SignIn";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/auth/SignUp";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/dashboard", element: <Dashboard /> },
]);
