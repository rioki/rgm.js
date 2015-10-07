
QUnit.module("general functions");
QUnit.test("add", function (assert) {
  var a = rgm.vec3(1, 2, 3);
  var b = rgm.vec3(4, 5, 6);
  var v = rgm.add(a, b);
  assert.deepEqual(v, rgm.vec3(5, 7, 9));
});

QUnit.test("sub", function (assert) {
  var a = rgm.vec3(8, 7, 6);
  var b = rgm.vec3(3, 4, 5);
  var v = rgm.sub(a, b);
  assert.deepEqual(v, rgm.vec3(5, 3, 1));
});

QUnit.test("neg", function (assert) {
  var a = rgm.vec3(8, 7, 6);
  var v = rgm.neg(a);
  assert.deepEqual(v, rgm.vec3(-8, -7, -6));
});

QUnit.module("vector functions");
QUnit.test("dot", function (assert) {
  var a = rgm.vec3(8, 7, 6);
  var b = rgm.vec3(3, 4, 5);
  var v = rgm.dot(a, b);
  assert.deepEqual(v, 82.0);
});

QUnit.test("cross", function (assert) {
  var a = rgm.vec3(1, 0, 0);
  var b = rgm.vec3(0, 1, 0);
  var v = rgm.cross(a, b);
  assert.deepEqual(v, rgm.vec3(0, 0, 1));
});

QUnit.test("vmult", function (assert) {
  var a = rgm.vec3(8, 7, 6);
  var b = rgm.vec3(3, 4, 5);
  var v = rgm.vmult(a, b);
  assert.deepEqual(v, rgm.vec3(24, 28, 30));
});

QUnit.test("length", function (assert) {
  var a = rgm.vec3(1.0, 2.0, 3.0);
  var v = rgm.length(a);
  assert.equal(v, 3.7416573867739413);
});

QUnit.test("normalize", function (assert) {
  var a = rgm.vec3(1.0, 2.0, 3.0);
  var v = rgm.normalize(a);
  var l = rgm.length(v);
  assert.ok(Math.abs(l - 1.0) < 0.0001);
});

QUnit.module("matrix functions");
QUnit.test("mmult", function (assert) {
  var a = rgm.mat3(3);
  var b = rgm.mat3(2);
  var v = rgm.mmult(a, b);
  assert.deepEqual(v, rgm.mat3(6));
});

QUnit.test("transpose", function (assert) {
  var m = rgm.mat3(1, 2, 3,
                   4, 5, 6,
                   7, 8, 9);
  var v = rgm.transpose(m);
  var r = rgm.mat3(1, 4, 7,
                   2, 5, 8,
                   3, 6, 9);
  assert.deepEqual(v, r);
});

QUnit.module("quaterion functions");
QUnit.test("qmult", function (assert) {
  var a = rgm.quat(0, 0, 0, 1);
  var b = rgm.quat(1, 2, 3, 0.5);
  var v = rgm.qmult(a, b);
  assert.deepEqual(v, rgm.quat(1, 2, 0, 0.5));
});

QUnit.module("mixed multiplications");
QUnit.test("vsmult", function (assert) {
  var a = rgm.vec3(1, 2, 3);
  var v = rgm.vsmult(a, 0.5);
  assert.deepEqual(v, rgm.vec3(0.5, 1.0, 1.5));
});

QUnit.test("mvmult", function (assert) {
  var a = rgm.mat3(1, 0, 0,
                   0, 2, 0,
                   0, 0, 3);
  var b = rgm.vec3(1, 2, 3);
  var v = rgm.mvmult(a, b);
  assert.deepEqual(v, rgm.vec3(1, 4, 9));
});

QUnit.test("qmult", function (assert) {
  var a = rgm.quat(1, 2, 3, 4);                   
  var b = rgm.quat(5, 6, 7, 8);
  var v = rgm.qmult(a, b);
  assert.deepEqual(v, rgm.quat(24, 48, 3, -6));
});

QUnit.test("quat2mat4", function (assert) {
  var q = rgm.qrotate(90, rgm.vec3(0, 0, 1));                   
  var m = rgm.mat4(1);
  m = rgm.rotate(m, 90, 0, 0, 1);
  
  var qm = rgm.quat2mat4(q);  
  assert.ok(rgm.equal(qm, m));  
});
