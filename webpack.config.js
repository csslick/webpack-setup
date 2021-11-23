const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    index: './src/index.js',
    about: './src/about.js'
  },
  output: {
    filename: '[name]_bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ // index.html(기본)
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['index'] // entry 속성 값
    }),
    new HtmlWebpackPlugin({ // 추가할 페이지에 설정
      template: 'src/about.html',
      filename: 'about.html',
      chunks: ['about']
    })
  ],
};
