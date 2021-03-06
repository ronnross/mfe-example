const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  target: ["web", "es5"],
  devServer: {
    port: 3000,
    static: {
      staticOptions: {
        contentBase: path.join(__dirname, "dist"),
      },
    },
    hot: true,
  },
  output: {
    publicPath: "auto",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              import: false,
              modules: {
                compileType: "module",
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app1",
      remotes: {
        dashboard: "dashboard@http://localhost:3001/remoteEntry.js",
      },
      shared: {
        react: {
          import: "react",
          shareKey: "react",
          shareScope: "default",
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
