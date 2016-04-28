module.exports = function (cooking) {
  cooking.add('preLoader.js', {
    test: /\.jsx?$/,
    exclude: /node_modules|bower_components/,
    loaders: ['eslint']
  })

  cooking.add('preLoader.vue', {
    test: /\.vue$/,
    exclude: /node_modules|bower_components/,
    loaders: ['eslint']
  })
}
