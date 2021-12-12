import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Container, Row, Col } from 'react-bootstrap';
import { TeamMember } from '../../types';

interface Props {
  team_data: TeamMember[];
  style?: React.CSSProperties;
}

const AboutSection: React.FC<Props> = ({ team_data, style }) => {
  return (
    <Container style={style}>
      {team_data.map(member => {
        return (
          <Row className={`mb-3 justify-content-center`} key={member.name}>
            <Col md="auto" style={{ maxWidth: `300px` }}>
              <img
                src={member.img}
                alt={member.alt}
                style={{
                  borderRadius: `50%`,
                  width: `100%`,
                }}
              />
            </Col>
            <Col sm>
              <div
                style={{
                  alignItems: 'center',
                  verticalAlign: 'center',
                }}
              >
                <div style={{ fontSize: '1.5rem', fontWeight: 500 }}>
                  {member.name}
                </div>
                <div>{member.title}</div>
                <div style={{ marginTop: '1rem' }}>{member.bio}</div>
                <div style={{ marginTop: '0.5rem' }}>
                  <b>Favorite Food(s): </b>
                  {member.favoriteFoods}
                </div>
              </div>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default AboutSection;
