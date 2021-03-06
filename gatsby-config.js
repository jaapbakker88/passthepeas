module.exports = {
  siteMetadata: {
    title: 'Pass The Peas',
  },
  plugins: ['gatsby-plugin-react-helmet', `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `ptp.jpbkkr.nl`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true
      }
    },
  ],
  pathPrefix: "/passthepeas"
}
