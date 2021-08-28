import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {Card} from 'react-bootstrap'

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="The Blacklist DMV | Spotlighting Black-owned food businesses in DC, MD, & VA" />
      <h1>About Us</h1>
      <p>
        Hi! Welcome to The Blacklist DMV food blog. We started as an Instagram
        account during the summer of 2020. Since then, we have expanded to
        TikTok, Twitter, Facebook, and this site. We spotlight Black-owned food
        businesses in Washington D.C., Maryland, and Virginia. We have been
        featured on local news (
        <a
          href="https://dcist.com/story/20/08/26/tiktok-dc-md-va-social-media-kevin-kramer-styled2be/"
          target="_blank"
          rel="noreferrer"
        >
          DCist
        </a>
        ) and have a business directory web app coming out this summer. Please
        feel free to contact us via email or social media.
      </p>

      <p>
        This site was created by two Maryland residents, Liz Beal and Shi
        Johnson-Bey. Shi is a Ph.D. student studying computational media, and
        Liz is a fifth-grade teacher. We have visited so many incredible places
        and met so many amazing business owners! It feels great to know we are
        putting money into the black community and helping local businesses,
        which are truly the backbone of our community. Our Blacklist following
        grows every day. We are so happy that you have joined us on this
        journey!
      </p>

      <h2>Why Black-owned Food Businesses?</h2>

      <p>
        According to www.greenamerica.org, the average median wealth of white
        families is 12 times that of black families! This disparity is known as
        the racial wealth gap. Eating at Black-owned restaurants is a fun, easy,
        and delicious way to help close the racial wealth gap. Supporting
        Black-owned businesses can create more opportunities for property
        ownership, credit building, and generational wealth in black families.
        (Source:
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
        Our Blacklist community grows everyday, with 30K followers and growing.
      </p>

      <p>
        If you have any questions or feedback, please feel free to reach out to
        us via email or social media.
      </p>

      <p>Thank you for visiting!</p>

      <h3>The Team</h3>

      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>Liz Beal</Card.Title>
          <Card.Subtitle>
            Co-Founder, Social Media Coordinator, and Head of Data Collection
          </Card.Subtitle>
        </Card.Body>
        <Card.Img
          variant="bottom"
          src="/about/liz.png"
          style={{ width: "20rem" }}
        />
      </Card>

      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>Shi Johnson-Bey</Card.Title>
          <Card.Subtitle>Co-Founder, Web Developer</Card.Subtitle>
        </Card.Body>
        <Card.Img
          variant="bottom"
          src="/about/shi.png"
          style={{ width: "20rem" }}
        />
      </Card>
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
