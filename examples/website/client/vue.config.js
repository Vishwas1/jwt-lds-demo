module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/crypto/'
    : '/',
  devServer: {
    port: 7001
  }
}
