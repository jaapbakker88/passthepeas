module.exports = {
  siteMetadata: {
    title: 'Pass The Peas',
  },
  plugins: ['gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `ptp.jpbkkr.nl`,
        protocol: `http`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false
      }
    },
  ],
}
