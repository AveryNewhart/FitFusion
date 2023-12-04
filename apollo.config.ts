module.exports = {
  client: {
    service: {
      name: 'fitfusion',
      // URL to the GraphQL API
      url: 'http://localhost:3020/graphql',
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.ts',
    ],
  },
}