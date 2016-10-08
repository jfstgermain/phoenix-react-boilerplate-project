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
	  // Run .scss files through the SASS and CSS loaders
	  {
	    test: /\.scss$/,
	    loader: "css!sass",
	  },
      {
        test: /\.(ttf|eot|svg|woff2?)$/,
        loader : "file-loader?name=fonts/[name].[ext]",
      },	
    ],
  },
};

export default config;
