import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Container>
        <Header />

        <main>{children}</main>
      </Container>

      <Footer />
    </>
  );
}
