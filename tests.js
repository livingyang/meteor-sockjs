Tinytest.add('meteor-sockjs', function (test) {
  var isDefined = false;
  try {
    sockjs;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "sockjs is not defined");
  test.isTrue(Package.sockjs.sockjs, "Package.sockjs.sockjs is not defined");
});