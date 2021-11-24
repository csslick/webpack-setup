const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
      { // file-loader
        test: /\.(jpe?g|png|gif|svg)$/,
        use: ['file-loader']
      },
      { // css loader
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      { // babel
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ // index.html(기본)
      template: 'src/index.html',
      filename: 'index.html',
      chunks: ['index'] // entry 속성 값, 해당 js만 로드
    }),
    new HtmlWebpackPlugin({ // 추가할 페이지에 설정
      template: 'src/about.html',
      filename: 'about.html',
      chunks: ['about']
    }),
    new CleanWebpackPlugin(),  // build시 /dist 초기화,
    
    // HTML img태그에서 이미지 불러올때 이미지 경로 dist로 옮김
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/images", to: "images" },
      ],
    }),
  ],
};
