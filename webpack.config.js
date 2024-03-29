const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin; // Correct import
const Dotenv = require('dotenv-webpack');
const deps = require("./package.json").dependencies;

module.exports = (_, argv) => {
  // Determine if the build is for production
  const isProduction = process.env.NODE_ENV === 'production' || argv.mode === 'production';
  // Set the publicPath based on the environment
  const publicPath = isProduction
    ? 'https://studentapp2-lab4.netlify.app/' // Replace with your Netlify app URL for StudentAPP2
    : 'http://localhost:3001/';

  return {
    output: {
      publicPath: publicPath,
    },

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
      port: 3001,
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.m?js$/, 
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: "studentapp2",
        filename: "remoteEntry.js",
        remotes: {
          studentapp1: isProduction
            ? "studentapp1@https://dulcet-longma-e49a65.netlify.app/remoteEntry.js" // Replace with your Netlify app URL for StudentAPP1
            : "studentapp1@http://localhost:3000/remoteEntry.js",
        },
        exposes: {},
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),
      new Dotenv()
    ],
  };
};
