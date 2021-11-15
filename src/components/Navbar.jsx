import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Neoblog</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="navlink nav-link" to="/">
            Home
          </Link>
          <Link className="navlink nav-link" to="/users">
            Users
          </Link>
          <Link className="navlink nav-link" to="/posts">
            Posts
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
