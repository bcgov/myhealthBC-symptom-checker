module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['plugin:cypress/recommended', 'react-app'],
  env: {
    'cypress/globals': true,
  },
};
