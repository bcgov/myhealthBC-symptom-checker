module.exports = {
  extends: ['../../.eslintrc.js'],
  ignorePatterns: ['.eslintrc.js', '**/*spec.ts', 'dist'],
  env: {
    node: true,
    jest: true,
  },
};
