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
          <Link className={styles.social_link} to="/#welcome">
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
          <FontAwesomeIcon
            icon={faTiktok}
            size="lg"
            color="white"
            className={styles.social_icon}
          />
        </Nav.Item>
        <Nav.Item>
          <FontAwesomeIcon
            icon={faInstagram}
            size="lg"
            color="white"
            className={styles.social_icon}
          />
        </Nav.Item>
        <Nav.Item>
          <FontAwesomeIcon
            icon={faFacebook}
            size="lg"
            color="white"
            className={styles.social_icon}
          />
        </Nav.Item>
        <Nav.Item>
          <FontAwesomeIcon
            icon={faTwitter}
            size="lg"
            color="white"
            className={styles.social_icon}
          />
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
