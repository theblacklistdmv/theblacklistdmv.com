import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTiktok,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { StaticImage } from "gatsby-plugin-image"

const AppNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <StaticImage
            src="../images/toolbar-icon.svg"
            width={30}
            height={30}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />{' '}
          The Blacklist DMV
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/" className="navlink">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about" className="navlink">About</Link></Nav.Link>
            <Nav.Link><Link to="/contact" className="navlink">Contact</Link></Nav.Link>
          </Nav>
          <Nav className="d-none d-lg-flex">
            <Nav.Link>
              <FontAwesomeIcon icon={faTiktok} />
            </Nav.Link>
            <Nav.Link>
              <FontAwesomeIcon icon={faInstagram} />
            </Nav.Link>
            <Nav.Link>
              <FontAwesomeIcon icon={faFacebook} />
            </Nav.Link>
            <Nav.Link>
              <FontAwesomeIcon icon={faTwitter} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
