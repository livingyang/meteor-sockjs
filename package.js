Package.describe({
  summary: "Meteor smart package for sockjs node.js package"
});

Npm.depends({
  sockjs: "0.3.8"
});

Package.on_use(function (api) {
  api.export('sockjs');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['sockjs', 'tinytest', 'test-helpers'], ['server']);
  api.add_files('tests.js', ['server']);
});