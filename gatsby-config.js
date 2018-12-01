module.exports = {
  siteMetadata: {
    title: 'MikMak kvíz',
    description:
      'Kikérdező a BME-VIK hallgatói számára Mikro- és makroökonómia tantárgyhoz.',
    language: 'hu',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    'gatsby-transformer-yaml',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
  ],
};
