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
          funFact
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
      <div style={{ width: '100%', height: '4px', background: 'red' }}></div>
      <div style={{ width: '100%', height: '4px', background: 'black' }}></div>
      <div style={{ width: '100%', height: '4px', background: 'green' }}></div>
      <div style={{ paddingTop: '1rem' }}>
        <Container style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <h1 id="welcome">Welcome!</h1>
          <p>
            Welcome to theblacklistdmv.com! We promote and highlight Black-owned
            food businesses and services located in Washington D.C., Maryland,
            and Virginia. We have social media accounts on TikTok, Instagram,
            Facebook, and Twitter. TikTok is by far our most popular platform
            with over 67,000 followers and growing. We love trying new places
            and showcasing our experiences online. Check out our content, leave
            a like, and don't forget to follow us. Check out our online business
            directory, Jyackl (pronounced like jackal), at{' '}
            <a href="https://jyackl.com" target="_blank" rel="noreferrer">
              Jyackl.com
            </a>
          </p>

          <p>
            Our Blacklist community grows everyday, with 70K followers and
            growing.
          </p>

          <p>
            If you have any questions or feedback, please feel free to reach out
            to us via email or social media.
          </p>

          <p>Thank you for visiting!</p>
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
            Hi! Welcome to The Blacklist DMV food blog. We started as an
            Instagram account during the summer of 2020. Since then, we have
            expanded to TikTok, Twitter, Facebook, and this site. We spotlight
            Black-owned food businesses in Washington D.C., Maryland, and
            Virginia.
          </p>

          <p>
            We have been featured in the{` `}
            <a
              href="https://dcist.com/story/20/08/26/tiktok-dc-md-va-social-media-kevin-kramer-styled2be/"
              target="_blank"
              rel="noreferrer"
            >
              DCist
            </a>{' '}
            and on{' '}
            <a
              href="https://wjla.com/news/local/couple-creates-business-identify-promote-dmv-black-owned-food-establishment"
              target="_blank"
              rel="noreferrer"
            >
              ABC7 News
            </a>
          </p>

          <p>
            This site was created by two Maryland residents, Liz Beal and Shi
            Johnson-Bey. Shi is a Ph.D. student studying computational media,
            and Liz is a fifth-grade teacher. We have visited so many incredible
            places and met so many amazing business owners! It feels great to
            know we are putting money into the black community and helping local
            businesses, which are truly the backbone of our community. Our
            Blacklist following grows every day. We are so happy that you have
            joined us on this journey!
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
            a fun, easy, and delicious way to help close the racial wealth gap.
            Supporting Black-owned businesses can create more opportunities for
            property ownership, credit building, and generational wealth in
            black families. (Source:
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
          style={{ backgroundImage: 'url(/parallax/magnolias_on_king.jpg)' }}
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
            If you would like us to spotlight your food/business, please reach
            out to us via email (theblacklistdmv@gmail.com) or our Instagram
            page. We will work with you on logistics such as scheduling,
            recording, and determining the items for review (requesters are
            expected to provide the food). Please keep in mind that Liz is a
            vegetarian, and Shi is a pescatarian, so we cannot review food that
            doesn't fall within our dietary restrictions.
          </p>

          <p>
            <strong>Update (September 2021): </strong> In-person school/classes
            have resumed, and we are working to balance the new time demands and
            this page. At the moment, we are not accepting requests. Thank you
            for your understanding and support.
          </p>
        </Container>

        {/* <section>
          <h2>Announcements</h2>

          <div style={{ padding: '0rem 1rem 0rem 1rem', color: 'white' }}>
            <hr></hr>
            <h4 style={{ fontWeight: 'bold' }}>
              Our Business Directory Web App is Live!
            </h4>
            <small>August 2021</small>
            <p>
              Try out our online business directory called, Jyackl. It's
              computer and mobile-friendly and features various filters and
              location search. Read more about it here.
            </p>
            <hr></hr>
          </div>

          <div style={{ padding: '0rem 1rem 0rem 1rem', color: 'white' }}>
            <hr></hr>
            <h4 style={{ fontWeight: 'bold' }}>We were on ABC7 News</h4>
            <small>August 2021</small>
            <p>
              We were featured in a story on the 10/11:00 DC ABC7 news. Read
              more about it and watch the full story on the abc7 site.
            </p>
            <hr></hr>
          </div>
        </section> */}
      </div>
    </AppLayout>
  );
};

export default HomePage;
