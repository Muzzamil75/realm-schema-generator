module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "8"
          }
        }
      ],
      "@babel/preset-typescript"
    ],
    plugins: [
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-nullish-coalescing-operator"
    ]
  };
};