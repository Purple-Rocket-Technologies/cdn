const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const isProduction = false;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    fin: path.resolve(__dirname, "src/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  mode: "production",
  optimization: {
    minimize: isProduction,
    minimizer: isProduction
      ? [
          new TerserPlugin({
            parallel: true,
            terserOptions: {
              compress: {
                drop_console: true,
              },
              output: {
                comments: false,
              },
            },
          }),
        ]
      : [],
  },
};
