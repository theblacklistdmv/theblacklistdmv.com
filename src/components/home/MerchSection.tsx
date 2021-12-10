import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { StaticImage } from 'gatsby-plugin-image';

const MerchSection: React.FC = () => {
  return (
    <Container>
      <h1>The Blacklist DMV Merch</h1>

      <div
        style={{
          display: 'inline-flex',
          flexWrap: 'wrap',
          gap: '12px',
          width: '100%',
          justifyContent: 'center',
          color: 'black',
        }}
      >
        <Card style={{ width: '20rem' }}>
          <StaticImage
            src="../images/stickers_a.jpg"
            alt={`The Blacklist DMv sticker on a silver water bottle.`}
          />
          <Card.Body>
            <Card.Title>Buy TheBlacklistDMV stickers on RedBubble!</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default MerchSection;
