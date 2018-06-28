const path = require('path');

const manifest = {
  json: path.resolve(__dirname, 'build/app/model/tasks.json'),
  port: process.env.PORT || 8000,
  client: path.resolve(__dirname, '..', 'client/build'),
};

module.exports = manifest;
