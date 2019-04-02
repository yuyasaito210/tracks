/* eslint-disable import/no-extraneous-dependencies */

const config = {
  babelrc: false,
  presets: ["react-native", "@babel/env"],
  plugins: [
    ["module-resolver", {
      root: ["./src"],
    }],
    "transform-class-properties",
  ],
}

module.exports = require("babel-jest").createTransformer(config)
