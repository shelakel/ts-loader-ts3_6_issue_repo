module.exports = function() {
  return {
    entry: "./app.ts",
    output: {
      filename: "bundle.js"
    },
    context: __dirname + "/src",
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          options: {
            transpileOnly: true
          }
        }
      ]
    }
  };
};
