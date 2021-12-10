import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTiktok,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'gatsby';
import * as styles from './AppFooter.module.scss';

const AppFooter: React.FC = () => {
  return (
    <div className={`text-center ${styles.footer}`}>
      <Nav className={`justify-content-center ${styles.footer_nav}`}>
        <Nav.Item>
          <Link className={styles.social_link} to="/">
            Welcome
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className={styles.social_link} to="/#about">
            About
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className={styles.social_link} to="/#contact">
            Contact
          </Link>
        </Nav.Item>
      </Nav>

      <p className={styles.follow_text}>Follow Us!</p>

      <Nav className={`justify-content-center ${styles.icon_nav}`}>
        <Nav.Item>
          <a
            href="https://www.tiktok.com/@theblacklistdmv"
            target="_blank"
            rel="noreferrer"
            className="toolbar-icon"
          >
            <FontAwesomeIcon
              size="lg"
              color="white"
              icon={faTiktok}
              className={styles.social_icon}
            />
          </a>
        </Nav.Item>
        <Nav.Item>
          <a
            href="https://www.instagram.com/theblacklistdmv/"
            target="_blank"
            rel="noreferrer"
            className="toolbar-icon"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              color="white"
              className={styles.social_icon}
            />
          </a>
        </Nav.Item>
        <Nav.Item>
          <a
            href="https://www.facebook.com/theblacklistdmv/"
            target="_blank"
            rel="noreferrer"
            className="toolbar-icon"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="lg"
              color="white"
              className={styles.social_icon}
            />
          </a>
        </Nav.Item>
        <Nav.Item>
          <a
            href="https://twitter.com/theblacklistdmv"
            target="_blank"
            rel="noreferrer"
            className="toolbar-icon"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              size="lg"
              color="white"
              className={styles.social_icon}
            />
          </a>
        </Nav.Item>
      </Nav>

      <p style={{ fontSize: 'small' }}>
        &copy; TheBlacklistDMV.com, 2021, All rights reserved
      </p>
      <div style={{ width: '100%', height: '4px', background: 'red' }}></div>
      <div style={{ width: '100%', height: '4px', background: 'black' }}></div>
      <div style={{ width: '100%', height: '4px', background: 'green' }}></div>
    </div>
  );
};

export default AppFooter;
