const path = require('path')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'travel-widget.js',
    library: 'createTravelWidget',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
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
