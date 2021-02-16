const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'travel-widget.js',
    library: 'createTravelWidget',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            // Run `postcss-loader` on each CSS `@import`, do not forget that `sass-loader` compile non CSS `@import`'s into a single file
            // If you need run `sass-loader` and `postcss-loader` on each CSS `@import` please set it to `2`
            importLoaders: 1,
            // Automatically enable css modules for files satisfying `/\.module\.\w+$/i` RegExp.
            modules: { auto: true },
          },
        }, 'postcss-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
