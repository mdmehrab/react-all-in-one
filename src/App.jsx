import DynamicProduct from "./components/DynamicProduct";
import Header from "./components/Header";
import Sidebar from "./components/Sidbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <>
      <Header />
      <div className="d-flex">
        <Container fluid>
          <Row>
            <Col md={3}>
              <Sidebar />
            </Col>
            <Col md={9}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Products />} />
                <Route
                  path="/products/:productId"
                  element={<DynamicProduct />}
                />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
