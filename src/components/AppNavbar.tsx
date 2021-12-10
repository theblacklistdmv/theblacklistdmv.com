import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTiktok,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import * as styles from './AppNavbar.module.scss';

const AppNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="app-toolbar">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/toolbar-icon.svg"
            width={30}
            height={30}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ gap: '16px' }}>
            <Nav.Item>
              <Link to="/#welcome" className={`${styles.page_link}`}>
                Welcome
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/#about" className={`${styles.page_link}`}>
                About
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/#contact" className={`${styles.page_link}`}>
                Contact
              </Link>
            </Nav.Item>
          </Nav>
          <Nav className="d-none d-lg-flex" style={{ gap: '16px' }}>
            <Nav.Item>
              <a
                href="https://www.tiktok.com/@theblacklistdmv"
                target="_blank"
                rel="noreferrer"
                className="toolbar-icon"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </Nav.Item>
            <Nav.Item>
              <a
                href="https://www.instagram.com/theblacklistdmv/"
                target="_blank"
                rel="noreferrer"
                className="toolbar-icon"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </Nav.Item>
            <Nav.Item>
              <a
                href="https://www.facebook.com/theblacklistdmv/"
                target="_blank"
                rel="noreferrer"
                className="toolbar-icon"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </Nav.Item>
            <Nav.Item>
              <a
                href="https://twitter.com/theblacklistdmv"
                target="_blank"
                rel="noreferrer"
                className="toolbar-icon"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
