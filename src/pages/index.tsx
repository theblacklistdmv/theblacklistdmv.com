import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Card, Row, Carousel } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

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
    }
  `);

  return (
    <AppLayout>
      <Seo
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        keywords={data.site.siteMetadata.keywords}
      />

      <Container style={{ paddingTop: '1rem', color: 'white' }}>
        <Container>
          <Row>
            <Col md={12}>
              <h1 id="welcome">Welcome!</h1>
              <p>
                Welcome to theblacklistdmv.com! We promote and highlight
                Black-owned food businesses and services located in Washington
                D.C., Maryland, and Virginia. We have social media accounts on
                TikTok, Instagram, Facebook, and Twitter. TikTok is by far our
                most popular platform with over 67,000 followers and growing. We
                love trying new places and showcasing our experiences online.
                Check out our content, leave a like, and don't forget to follow
                us. Check out our online business directory, Jyackl (pronounced
                like jackal), at{' '}
                <a href="https://jyackl.com" target="_blank" rel="noreferrer">
                  Jyackl.com
                </a>
              </p>
            </Col>
            {/* <Col md={6}>
              <Carousel fade indicators={false}>
                <Carousel.Item>
                  <StaticImage
                    src={'../images/food/spizzy_0.jpg'}
                    alt={'Spizzy - Fort Washington Waffle'}
                    style={{
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <Carousel.Caption>
                    <p
                      style={{
                        fontSize: 'small',
                        background: '#0000007a',
                        padding: '0.25rem',
                      }}
                    >
                      Spizzy - Fort Washington Waffle
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <StaticImage
                    src="../images/food/cloudy_donuts_0.jpg"
                    alt={`Cloudy Donut Co. - Assorted Donuts`}
                    style={{
                      maxWidth: '100%',
                    }}
                  />

                  <Carousel.Caption>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <StaticImage
                    src="../images/food/crave_it_on_main.jpg"
                    alt={`Waffles from Spizzy Smoothies`}
                    style={{
                      maxWidth: '100%',
                    }}
                  />

                  <Carousel.Caption>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <StaticImage
                    src="../images/food/crave_it_on_main.jpg"
                    alt={`Waffles from Spizzy Smoothies`}
                    style={{
                      maxWidth: '100%',
                    }}
                  />

                  <Carousel.Caption>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <StaticImage
                    src="../images/food/crave_it_on_main.jpg"
                    alt={`Waffles from Spizzy Smoothies`}
                    style={{
                      maxWidth: '100%',
                    }}
                  />

                  <Carousel.Caption>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <StaticImage
                    src="../images/food/crave_it_on_main.jpg"
                    alt={`Waffles from Spizzy Smoothies`}
                    style={{
                      maxWidth: '100%',
                    }}
                  />

                  <Carousel.Caption>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <StaticImage
                    src="../images/food/crave_it_on_main.jpg"
                    alt={`Waffles from Spizzy Smoothies`}
                    style={{
                      maxWidth: '100%',
                    }}
                  />

                  <Carousel.Caption>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <StaticImage
                    src="../images/food/crave_it_on_main.jpg"
                    alt={`Waffles from Spizzy Smoothies`}
                    style={{
                      maxWidth: '100%',
                    }}
                  />

                  <Carousel.Caption>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <StaticImage
                    src="../images/food/crave_it_on_main.jpg"
                    alt={`Waffles from Spizzy Smoothies`}
                    style={{
                      maxWidth: '100%',
                    }}
                  />

                  <Carousel.Caption>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <StaticImage
                    src="../images/food/crave_it_on_main.jpg"
                    alt={`Waffles from Spizzy Smoothies`}
                    style={{
                      maxWidth: '100%',
                    }}
                  />

                  <Carousel.Caption>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col> */}
          </Row>
        </Container>

        <hr></hr>

        <Container>
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

          <div
            style={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
              marginBottom: '16px',
            }}
          >
            <Card
              style={{ minWidth: '300px', maxWidth: '20rem', color: 'black' }}
            >
              <Card.Body>
                <Card.Title>Liz Beal</Card.Title>
                <Card.Subtitle>
                  Co-Founder, Social Media Coordinator, and Head of Data
                  Collection
                </Card.Subtitle>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="/about/liz.png"
                style={{ width: '100%' }}
              />
            </Card>

            <Card
              style={{ minWidth: '300px', maxWidth: '20rem', color: 'black' }}
            >
              <Card.Body>
                <Card.Title>Shi Johnson-Bey</Card.Title>
                <Card.Subtitle>Co-Founder, Web Developer</Card.Subtitle>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="/about/shi.png"
                style={{ width: '100%' }}
              />
            </Card>
          </div>

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

        <hr></hr>

        <Container>
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
              <a href="mailto:theblacklistdmv@gmail.com" rel="noreferrer">
                theblacklistdmv@gmail.com
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

        <hr></hr>

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
                <Card.Title>
                  Buy TheBlacklistDMV stickers on RedBubble!
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </Container>

        {/* <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol> */}
      </Container>
    </AppLayout>
  );
};

export default HomePage;
