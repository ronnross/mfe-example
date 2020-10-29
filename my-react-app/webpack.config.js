const path = require("path");
//const ModuleFederationPlugin = require("@module-federation/dashboard-plugin");
const ModuleFederationPlugin = require("webpack").container
.ModuleFederationPlugin;

const output = "./lib/js";
//const entry = output + "/src/Index.bs.js";
const entry = output + "/src/FetchedDogPictures/FetchedDogPictures.bs.js";

module.exports = {
  entry,
  // If you ever want to use webpack during development, change 'production'
  // to 'development' as per webpack documentation. Again, you don't have to
  // use webpack or any other bundler during development! Recheck README if
  // you didn't know this
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, output),
    port: 3000,
  },
  target: "web",
  output: {
    path: `${__dirname}/${output}`,
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      { test: /\.(re|ml)$/, use: "bs-loader" },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dogpix",
      library: { type: "var", name: "dogpix" },
      filename: "remoteEntry.js",
      exposes: {
        "./DogPictures": entry,
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
  ],
};

