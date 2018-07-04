const babelOptions = {
  presets: ["@babel/env"],
  plugins: ["@babel/transform-runtime"]
};

module.exports = require("babel-jest").createTransformer(babelOptions);
