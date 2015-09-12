
QUnit.module("vec2");
QUnit.test("vec2 default is zero", function (assert) {
  var v = rgm.vec2();
  assert.equal(2, v.length);
  assert.equal(0.0, v[0]);
  assert.equal(0.0, v[1]);
});

QUnit.test("vec2 single value", function (assert) {
  var v = rgm.vec2(1.0);
  assert.equal(2, v.length);
  assert.equal(1.0, v[0]);
  assert.equal(1.0, v[1]);
});

QUnit.test("vec2 init with single values", function (assert) {
  var v = rgm.vec2(1, 2);
  assert.equal(2, v.length);
  assert.equal(1.0, v[0]);
  assert.equal(2.0, v[1]);
});

QUnit.test("vec2 init with array", function (assert) {
  var v = rgm.vec2([1, 2]);
  assert.equal(2, v.length);
  assert.equal(1.0, v[0]);
  assert.equal(2.0, v[1]);
});

QUnit.module("vec3");
QUnit.test("vec3 default is zero", function (assert) {
  var v = rgm.vec3();
  assert.equal(3, v.length);
  assert.equal(0.0, v[0]);
  assert.equal(0.0, v[1]);
  assert.equal(0.0, v[2]);
});

QUnit.test("vec3 single value", function (assert) {
  var v = rgm.vec3(1.0);
  assert.equal(3, v.length);
  assert.equal(1.0, v[0]);
  assert.equal(1.0, v[1]);
  assert.equal(1.0, v[2]);
});

QUnit.test("vec3 init with single values", function (assert) {
  var v = rgm.vec3(1, 2, 3);
  assert.equal(3, v.length);
  assert.equal(1.0, v[0]);
  assert.equal(2.0, v[1]);
  assert.equal(3.0, v[2]);
});

QUnit.test("vec3 init with array", function (assert) {
  var v = rgm.vec3([1, 2, 3]);
  assert.equal(3, v.length);
  assert.equal(1.0, v[0]);
  assert.equal(2.0, v[1]);
  assert.equal(3.0, v[2]);
});

QUnit.module("vec4");
QUnit.test("vec4 default is zero", function (assert) {
  var v = rgm.vec4();
  assert.equal(4, v.length);
  assert.equal(0.0, v[0]);
  assert.equal(0.0, v[1]);
  assert.equal(0.0, v[2]);
  assert.equal(0.0, v[3]);
});

QUnit.test("vec4 single value", function (assert) {
  var v = rgm.vec4(1.0);
  assert.equal(4, v.length);
  assert.equal(1.0, v[0]);
  assert.equal(1.0, v[1]);
  assert.equal(1.0, v[2]);
  assert.equal(1.0, v[3]);
});

QUnit.test("vec4 init with single values", function (assert) {
  var v = rgm.vec4(1, 2, 3, 4);
  assert.equal(4, v.length);
  assert.equal(1.0, v[0]);
  assert.equal(2.0, v[1]);
  assert.equal(3.0, v[2]);
  assert.equal(4.0, v[3]);
});

QUnit.test("vec4 init with array", function (assert) {
  var v = rgm.vec3([1, 2, 3, 4]);
  assert.equal(4, v.length);
  assert.equal(1.0, v[0]);
  assert.equal(2.0, v[1]);
  assert.equal(3.0, v[2]);
  assert.equal(4.0, v[3]);
});

QUnit.module("mat3");
QUnit.test("mat3 default is identity", function (assert) {
  var m = rgm.mat3();
  assert.equal(9, m.length);
  
  var r = new Float32Array([1.0, 0.0, 0.0,
                            0.0, 1.0, 0.0,
                            0.0, 0.0, 1.0]);
  
  assert.deepEqual(r, m);
});

QUnit.test("mat3 init single value", function (assert) {
  var m = rgm.mat3(2.0);
  assert.equal(9, m.length);
  
  var r = new Float32Array([2.0, 0.0, 0.0,
                            0.0, 2.0, 0.0,
                            0.0, 0.0, 2.0]);
  
  assert.deepEqual(r, m);
});

QUnit.test("mat3 init array", function (assert) {
  
  // NOTE: rwo -> column (openGL style)
  var m = rgm.mat3([1.0, 2.0, 3.0,
                    4.0, 5.0, 6.0,
                    7.0, 8.0, 9.0]);
  
  assert.equal(9, m.length);
  
  var r = new Float32Array([1.0, 2.0, 3.0,
                            4.0, 5.0, 6.0,
                            7.0, 8.0, 9.0]);
  
  assert.deepEqual(r, m);
});

QUnit.test("mat3 init single values", function (assert) {
  
  // NOTE: rwo -> column (openGL style)
  var m = rgm.mat3(1.0, 2.0, 3.0,
                   4.0, 5.0, 6.0,
                   7.0, 8.0, 9.0);
  
  assert.equal(9, m.length);
  
  var r = new Float32Array([1.0, 2.0, 3.0,
                            4.0, 5.0, 6.0,
                            7.0, 8.0, 9.0]);
  
  assert.deepEqual(r, m);
});

QUnit.module("mat4");
QUnit.test("mat4 default is identity", function (assert) {
  var m = rgm.mat4();
  assert.equal(16, m.length);
  
  var r = new Float32Array([1.0, 0.0, 0.0, 0.0,
                            0.0, 1.0, 0.0, 0.0,
                            0.0, 0.0, 1.0, 0.0,
                            0.0, 0.0, 0.0, 1.0]);
  
  assert.deepEqual(r, m);
});

QUnit.test("mat4 init single value", function (assert) {
  var m = rgm.mat4(2.0);
  assert.equal(16, m.length);
  
  var r = new Float32Array([2.0, 0.0, 0.0, 0.0,
                            0.0, 2.0, 0.0, 0.0, 
                            0.0, 0.0, 2.0, 0.0,
                            0.0, 0.0, 0.0, 2.0]);
  
  assert.deepEqual(r, m);
});

QUnit.test("mat4 init array", function (assert) {
  
  // NOTE: rwo -> column (openGL style)
  var m = rgm.mat4([ 1.0,  2.0,  3.0,  4.0,
                     5.0,  6.0,  7.0,  8.0,
                     9.0, 10.0, 11.0, 12.0,
                    13.0, 14.0, 15.0, 16.0]);
  
  assert.equal(16, m.length);
  
  var r = new Float32Array([ 1.0,  2.0,  3.0,  4.0,
                             5.0,  6.0,  7.0,  8.0,
                             9.0, 10.0, 11.0, 12.0,
                            13.0, 14.0, 15.0, 16.0]);
  
  assert.deepEqual(r, m);
});

QUnit.test("mat4 init single values", function (assert) {
  
  // NOTE: rwo -> column (openGL style)
  var m = rgm.mat4(1.0,  2.0,  3.0,  4.0,
                    5.0,  6.0,  7.0,  8.0,
                    9.0, 10.0, 11.0, 12.0,
                   13.0, 14.0, 15.0, 16.0);
  
  assert.equal(16, m.length);
  
  var r = new Float32Array([ 1.0,  2.0,  3.0,  4.0,
                             5.0,  6.0,  7.0,  8.0,
                             9.0, 10.0, 11.0, 12.0,
                            13.0, 14.0, 15.0, 16.0]);
  
  assert.deepEqual(r, m);
});

QUnit.module("quat");
QUnit.test("quat default", function (assert) {
  var v = rgm.quat();
  assert.equal(4, v.length);
  assert.equal(0.0, v[0]);
  assert.equal(0.0, v[1]);
  assert.equal(0.0, v[2]);
  assert.equal(1.0, v[3]);
});

QUnit.test("quat init array", function (assert) {
  var v = rgm.quat([1, 2, 3, 4]);
  assert.equal(4, v.length);
  assert.equal(1.0, v[0]);
  assert.equal(2.0, v[1]);
  assert.equal(3.0, v[2]);
  assert.equal(4.0, v[3]);
});

QUnit.test("quat init values", function (assert) {
  var v = rgm.quat(1, 2, 3, 4);
  assert.equal(4, v.length);
  assert.equal(1.0, v[0]);
  assert.equal(2.0, v[1]);
  assert.equal(3.0, v[2]);
  assert.equal(4.0, v[3]);
});
