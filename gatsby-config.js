require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `The Blacklist DMV | Spotlighting Black-owned food businesses in DC, MD, & VA`,
    author: {
      name: `The Blacklist DMV`,
      summary: `Food bloggers from MD`,
    },
    description: `Follow The Blacklist DMV uses social media @theblacklistdmv to see our journey spotlighting Black-owned food businesses/services in Washington D.C., Maryland, & Virginia`,
    siteUrl: `https://theblacklistdmv.com`,
    social: {
      twitter: `theblacklistdmv`,
      instagram: `theblacklistdmv`,
      tiktok: `theblacklistdmv`,
      facebook: `theblacklistdmv`,
    },
    keywords: [
      `black-owned`,
      `food`,
      `business`,
      `theblacklistdmv`,
      `black`,
      `dmv`,
      `dc`,
      `md`,
      `va`,
    ],
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-instagram-embed`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: process.env.GATSBY_FIREBASE_API_KEY,
          authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
          projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
          storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.GATSBY_FIREBASE_APP_ID,
          measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-fontawesome-css`,
    // `gatsby-plugin-tiktok`,
  ],
};
