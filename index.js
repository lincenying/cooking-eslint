module.exports = function (cooking) {
  cooking.add('preLoader.js', {
    test: /\.jsx?$/,
    loaders: ['eslint']
  })

  cooking.add('preLoader.vue', {
    test: /\.vue$/,
    loaders: ['eslint']
  })
}
