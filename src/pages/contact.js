import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="The Blacklist DMV | Spotlighting Black-owned food businesses in DC, MD, & VA" />
      <h1>Contact Us</h1>
      <p>
        We can be reached via any of our social media accounts (Instagram,
        Facebook, Twitter, and TikTok) or by email.
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
        Please click the button below and complete the form if you would like to
        be spotlighted in a business shoutout across our Instagram, Facebook,
        and Twitter accounts. In these, we post photos that you provide along
        with caption text that tells people more about your business. Please
        include social media links so people can find you 😀.
      </p>

      <p>Thank you for your patience, and we will be in touch shortly.</p>

      <ul className="list-group" style={{ maxWidth: "400px" }}>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSesaLbkGUxZ1FtT5SzXnZ12Cs9eA8MnzAeBmOuNeB32Gl3Bjg/viewform?usp=sf_link"
          target="_blank"
          rel="noreferrer"
          className="list-group-item list-group-item-action"
        >
          Submit your business
        </a>
      </ul>

      <hr />

      <h2>Business Reviews</h2>

      <p>
        If you would like us to review your food/business, please reach out to
        us via email (theblacklistdmv@gmail.com). We will work with you on
        logistics such as scheduling, recording, and determining the items for
        review (requesters are expected to provide the food). Liz is a
        vegetarian, and Shi is a pescatarian, so we cannot review food that
        doesn't fall within our dietary restrictions.
      </p>
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
