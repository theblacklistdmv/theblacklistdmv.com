import React from "react"
import { Container, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTiktok,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <Container className={`text-center`} style={{paddingBottom: '8px', paddingTop: '8px'}}>
      <p style={{ fontSize: "x-large", fontWeight: "bold" }}>Follow Us!</p>

      <Nav className="justify-content-center" style={{fontSize: 'xlarge'}}>
        <Nav.Link>
          <FontAwesomeIcon icon={faTiktok} size="lg" color='black'/>
        </Nav.Link>
        <Nav.Link>
          <FontAwesomeIcon icon={faInstagram} size="lg" color='black'/>
        </Nav.Link>
        <Nav.Link>
          <FontAwesomeIcon icon={faFacebook} size="lg" color='black'/>
        </Nav.Link>
        <Nav.Link>
          <FontAwesomeIcon icon={faTwitter} size="lg" color='black'/>
        </Nav.Link>
      </Nav>

    <p style={{fontSize: 'small'}}>&copy; TheBlacklistDMV.com, 2021, All rights reserved</p>
    <div style={{width: '100%', height: '4px', background: 'red'}}></div>
  <div style={{width: '100%', height: '4px', background: 'rgb(0, 0, 0)'}}></div>
  <div style={{width: '100%', height: '4px', background: 'green'}}></div>
    </Container>
  )
}

export default Footer
