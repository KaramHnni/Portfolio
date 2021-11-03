module.exports = {
  siteMetadata: {
    title: `Karam Henni `,
    description: `Portfolio Created by Karam Henni , a full stack web developer to show his work`,
    author: `@KaramHnni`,
  },
  plugins: [
  
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-relative-images`,
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 800,
            linkImagesToOriginal: false,
            sizeByPixelDensity: true,
            showCaptions: true
          }
        },
      ]
    }
  },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src`,
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
      resolve :`gatsby-plugin-postcss`,
      options : {
          postCssPlugins : [require('tailwindcss')]
      }
 
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
