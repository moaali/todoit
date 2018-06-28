module.exports = {
  bail: true,
  verbose: true,
  setupFiles: ['<rootDir>/.config/jest/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleDirectories: [
    'node_modules',
    'client/src',
    'client/src/shared/scripts',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/.config/jest/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/.config/jest/__mocks__/fileMock.js'
  },
  moduleFileExtensions: [
    'js'
  ],
}
