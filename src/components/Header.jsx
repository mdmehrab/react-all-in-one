import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { headerCategories } from "../data/data";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" className="nav-link fw-bold">
          Cal-Dal
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/products" className="nav-link">
              Products
            </Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              {headerCategories.map((elem) => (
                <NavDropdown.Item href="#action3" key={elem.id}>
                  {elem.label} - {elem.price}
                </NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action5" className="text-danger">
                Extra Discount with 10%
              </NavDropdown.Item> */}
            </NavDropdown>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
