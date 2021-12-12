import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Card, Row } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import AboutSection from '../components/home/AboutSection';
import AppHeader from '../components/AppHeader';

const HomePage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
      allTeamMemberAboutJson {
        nodes {
          img
          extension
          title
          name
          bio
          favoriteFoods
          favoriteBusiness
          alt
        }
      }
    }
  `);

  return (
    <AppLayout>
      <Seo
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        keywords={data.site.siteMetadata.keywords}
      />

      <AppHeader />

      <div style={{ paddingTop: '1rem' }}>
        <Container style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <h1 id="welcome">Welcome!</h1>
          <p>
            Welcome to theblacklistdmv.com! We spotlight Black-owned food
            businesses and services located in Washington D.C., Maryland, and
            Virginia. We have social media accounts spanning TikTok, Instagram,
            Facebook, and Twitter. TikTok is by far our most popular platform
            with over 70,000 followers and growing. We love trying new places
            and showcasing our experiences online. Take a peek at our content,
            leave a like, and don't forget to follow us. Also, if you're looking
            for Black-owned places to eat, explore our online business
            directory,{' '}
            <a href="https://jyackl.com" target="_blank" rel="noreferrer">
              Jyackl.com
            </a>
            .
          </p>

          <p>
            If you have any questions or would like to get in touch with us,
            please feel free to reach out to us via email or social media.
          </p>
        </Container>

        <div
          className="parallax"
          style={{ backgroundImage: 'url(/parallax/happy_cafe_va_0.jpg)' }}
        >
          <div className="tint"></div>
          <div className="section-title">ABOUT US</div>
        </div>

        <Container style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <h1 id="about">About Us</h1>
          <p>
            We started as an Instagram account during the summer of 2020, where
            we mainly posted compiled lists of Black-owned restaurants. Since
            then, we have expanded to posting videos of our adventures on
            TikTok, Twitter, Facebook as well. Our mission is to assist in
            driving patronage to Black-owned food businesses in the DMV area.
          </p>

          <p>
            We have visited so many incredible places and met so many amazing
            business owners! It feels great to know we are putting money into
            the black community and helping local businesses, which are truly
            the backbone of our community. Our Blacklist following grows every
            day. We are so happy that you have joined us on this journey!
          </p>

          <AboutSection
            team_data={data.allTeamMemberAboutJson.nodes}
            style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
          />

          <h2>Why Black-owned Food Businesses?</h2>

          <p>
            According to www.greenamerica.org, the average median wealth of
            white families is 12 times that of black families! This disparity is
            known as the racial wealth gap. Eating at Black-owned restaurants is
            a fun, easy, and delicious way to help close the gap. Supporting
            Black-owned businesses can create more property ownership
            opportunities, credit building, and generational wealth in black
            families. (Source:
            <a
              href="https://www.greenamerica.org/"
              target="_blank"
              rel="noreferrer"
            >
              www.greenamerica.org
            </a>
            )
          </p>
        </Container>

        <div
          className="parallax"
          style={{ backgroundImage: 'url(/parallax/spizzy_0.jpg)' }}
        >
          <div className="tint"></div>
          <div className="section-title">PRESS</div>
        </div>

        <Container style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <Row>
            <Col sm>
              <Card style={{ margin: '8px' }} className="shadow">
                <a
                  href="https://dcist.com/story/20/08/26/tiktok-dc-md-va-social-media-kevin-kramer-styled2be/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <StaticImage
                    src="../images/TheDCist.jpg"
                    alt="The DCist Logo"
                  />
                </a>
              </Card>
            </Col>
            <Col sm>
              <Card
                style={{ margin: '8px', padding: '16px' }}
                className="shadow"
              >
                <a
                  href="https://wjla.com/news/local/couple-creates-business-identify-promote-dmv-black-owned-food-establishment"
                  target="_blank"
                  rel="noreferrer"
                >
                  <StaticImage
                    src="../images/WJLA-TV_logo.png"
                    alt="WJLA TV logo"
                  />
                </a>
              </Card>
            </Col>
            <Col
              sm
              style={{ justifyContent: 'center', alignContent: 'center' }}
            >
              <Card
                style={{ margin: '8px', padding: '16px' }}
                className="shadow"
              >
                <a
                  href="https://voyagebaltimore.com/interview/meet-liz-beal-shi-johnson-bey-of-washington-dc-baltimore-area/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <StaticImage
                    src="../images/VoyageBaltimorelarge.png"
                    alt="Voyage Baltimore logo"
                  />
                </a>
              </Card>
            </Col>
          </Row>
        </Container>

        <div
          className="parallax"
          style={{ backgroundImage: 'url(/parallax/1215-wellness.jpeg)' }}
        >
          <div className="tint"></div>
          <div className="section-title">CONTACT</div>
        </div>

        <Container style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <h1 id="contact">Contact Us</h1>
          <p>
            We can be reached via any of our social media accounts or by email.
            However, Instagram and email have the best chances of receiving a
            more timely response.
          </p>

          <ul>
            <li>
              <b>Instagram: </b>
              <a
                href="https://www.instagram.com/theblacklistdmv/"
                target="_blank"
                rel="noreferrer"
              >
                instagram.com/theblacklistdmv
              </a>
            </li>
            <li>
              <b>TikTok: </b>
              <a
                href="https://www.tiktok.com/@theblacklistdmv"
                target="_blank"
                rel="noreferrer"
              >
                tiktok.com/@theblacklistdmv
              </a>
            </li>
            <li>
              <b>Facebook: </b>
              <a
                href="https://www.facebook.com/theblacklistdmv/"
                target="_blank"
                rel="noreferrer"
              >
                facebook.com/theblacklistdmv
              </a>
            </li>
            <li>
              <b>Twitter: </b>
              <a
                href="https://twitter.com/theblacklistdmv"
                target="_blank"
                rel="noreferrer"
              >
                twitter.com/theblacklistdmv
              </a>
            </li>
            <li>
              <b>Email: </b>
              <a href="mailto:contact@theblacklistdmv.com" rel="noreferrer">
                contact@theblacklistdmv.com
              </a>
            </li>
          </ul>

          <h2>Business Spotlights</h2>

          <p>
            If you want us to spotlight your business, please reach out to us
            via email (contact@theblacklistdmv.com) or our Instagram page. We
            will work with you on logistics such as scheduling, recording, and
            determining the items for review (requesters are expected to provide
            the food). Spotlight approvals are made at our discretion.
          </p>
        </Container>
      </div>
    </AppLayout>
  );
};

export default HomePage;
