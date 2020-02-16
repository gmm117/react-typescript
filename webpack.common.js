const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    index: "index.html",
    port: 9001
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module : {
    rules: [
        {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: "/node_modules",
            use: ['babel-loader'],
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: "html-loader",
                    options: { minimize: true }
                }
            ]
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', "sass-loader"]
        }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './assets/index.html', // src/index.html 파일을 읽는다.
      filename: 'index.html' // output으로 출력할 파일은 index.html 이다.
    }),
    new MiniCssExtractPlugin({
        filename: '[contenthash].css'
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  }
};