const fs = require('fs')

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') {
      config.devServer = {
        disableHostCheck: true,
        host: 'resume.test',
        https: {
          key: fs.readFileSync('./resume.test-key.pem', 'utf8'),
          cert: fs.readFileSync('./resume.test.pem', 'utf-8'),
        }
      }
    }
  },
  devServer: {
    proxy: 'https://resume.test:8000'
  },
  transpileDependencies: [
    "vuetify"
  ],
  publicPath: '/'
}