// jest.config.js
export default {
  transform: {},
  moduleFileExtensions: ['js'],
  testEnvironment: 'node',
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy" // Para lidar com imports de CSS se necessário
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(some-esm-package|another-esm-package)/)"
  ],
};
