const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const isProduction = true;
const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    fin: path.resolve(__dirname, "src/main.js"),
    video: path.resolve(__dirname, "src/pages/apps/video/index.js"),
    cookie: {
      import: path.resolve(__dirname, "src/cookie/index.js"),
      library: {
        name: "cookie",
        type: "umd",
        umdNamedDefine: true,
      },
    },
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
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new VueLoaderPlugin()],
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
