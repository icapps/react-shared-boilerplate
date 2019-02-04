const path = require('path');

// react-native >= 0.57

const extraNodeModules = {
  'react-shared-redux': path.resolve(__dirname + '/../shared/redux/'),
  'react-shared-services': path.resolve(__dirname + '/../shared/services/'),
  'react-shared-utils': path.resolve(__dirname + '/../shared/utils/'),
  'redux-logger': path.resolve(__dirname + '/../shared/redux/node_modules/redux-logger'),
  '@babel': path.resolve(__dirname + '/../shared/redux/node_modules/@babel'),
};
const watchFolders = [
  path.resolve(__dirname + '/../shared/redux/'),
  path.resolve(__dirname + '/../shared/services/'),
  path.resolve(__dirname + '/../shared/utils/'),
];

module.exports = {
  resolver: {
    extraNodeModules,
  },
  watchFolders,
};
