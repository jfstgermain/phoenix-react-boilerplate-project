"use strict"

const config = {
  entry: "./web/static/js/app.js",
  output: {
    path: "./priv/static",
    filename: "js/app.js",
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: { presets: ["es2015"], },
      },
    ],
  },
};

export default config;
