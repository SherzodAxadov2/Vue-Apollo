module.exports = {
    client: {
      service: {
        name: 'hello-apollo',
        // URL to the GraphQL API
        url: 'http://localhost:8080/graphql',
      },
      // Files processed by the extension
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
      ],
    },
  }