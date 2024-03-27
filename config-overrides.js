const webpack = require("webpack");

module.exports = function override(config, env) {
  // Add fallbacks for stream and buffer
  config.resolve.fallback = {
    ...config.resolve.fallback,
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer"),
    crypto: require.resolve("crypto-browserify") // Add crypto fallback
  };

  // Add TypeScript (.ts) and JavaScript (.js) extensions
  config.resolve.extensions = [...config.resolve.extensions, ".ts", ".js"];

  // Provide plugins for Buffer and process
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ];

  return config;
};
