
QUnit.module("transforms");
QUnit.test("ortho", function (assert) {
  var p = rgm.ortho(-10, 10, -5, 5, -1, 1);
  var v = rgm.vec4(10, 10, 0, 1);
  var r = rgm.mvmult(p, v)
  assert.deepEqual(r, rgm.vec4(1, 2, 0, 1));
});

QUnit.test("perspective", function (assert) {
  var p = rgm.perspective(45.0, 1.5, 0.1, 1000.0);
  var v = rgm.vec4(10, 10, 10, 1);
  var r = rgm.mvmult(p, v);  
  // divide by m for full projection
  var r = rgm.vsmult(r, 1.0/r[3]);
  assert.deepEqual(r, rgm.vec4(-0.6666666865348816, -1, 1.0202020406723022, 1));
});

QUnit.test("translate", function (assert) {
  var t = rgm.mat4(1);
  var t = rgm.translate(t, 1, 2, 3);
  var r = rgm.mvmult(t, rgm.vec4(1, 1, 1, 1))
  assert.deepEqual(r, rgm.vec4(2, 3, 4, 1));
});

QUnit.test("rotate", function (assert) {
  var t = rgm.mat4(1);
  var t = rgm.rotate(t, 90, 0, 0, 1);
  var r = rgm.mvmult(t, rgm.vec4(1, 0, 0, 1))
  // TODO implement close test
  assert.deepEqual(r, rgm.vec4(6.123234262925839e-17, 1, 0, 1));
});

QUnit.test("scale", function (assert) {
  var t = rgm.mat4(1);
  var t = rgm.scale(t, 2, 3, 4, 1);
  var r = rgm.mvmult(t, rgm.vec4(1, 1, 1, 1))
  assert.deepEqual(r, rgm.vec4(2, 3, 4, 1));
});
