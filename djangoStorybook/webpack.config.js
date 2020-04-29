module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/app/assets/javascripts',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['@babel/preset-env', 'es2015']
        }
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
}
