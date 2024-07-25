module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}],
  // (preset)added to make jsx work
  ["@babel/preset-react",{ runtime: "automatic"}],
  ],
};