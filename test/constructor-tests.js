
QUnit.module("vec2");
QUnit.test("vec2 default is zero", function (assert) {
  var v = rgm.vec2();
  assert.equal(v.length, 2);
  assert.equal(v[0], 0.0);
  assert.equal(v[1], 0.0);
});

QUnit.test("vec2 single value", function (assert) {
  var v = rgm.vec2(1.0);
  assert.equal(v.length, 2);
  assert.equal(v[0], 1.0);
  assert.equal(1.0, v[1]);
});

QUnit.test("vec2 init with single values", function (assert) {
  var v = rgm.vec2(1, 2);
  assert.equal(v.length, 2);
  assert.equal(v[0], 1.0);
  assert.equal(v[1], 2.0);
});

QUnit.test("vec2 init with array", function (assert) {
  var v = rgm.vec2([1, 2]);
  assert.equal(v.length, 2);
  assert.equal(v[0], 1.0);
  assert.equal(v[1], 2.0);
});

QUnit.test("vec2 from vec3", function (assert) {
  var o = rgm.vec3(1, 2, 3);
  var v = rgm.vec2(o);
  assert.equal(v.length, 2);
  assert.equal(v[0], 1.0);
  assert.equal(v[1], 2.0);
});

QUnit.test("vec2 from vec4", function (assert) {
  var o = rgm.vec4(1, 2, 3, 4);
  var v = rgm.vec2(o);
  assert.equal(v.length, 2);
  assert.equal(v[0], 1.0);
  assert.equal(v[1], 2.0);
});

QUnit.module("vec3");
QUnit.test("vec3 default is zero", function (assert) {
  var v = rgm.vec3();
  assert.equal(v.length, 3);
  assert.equal(v[0], 0.0);
  assert.equal(v[1], 0.0);
  assert.equal(v[2], 0.0);
});

QUnit.test("vec3 single value", function (assert) {
  var v = rgm.vec3(1.0);
  assert.equal(v.length, 3);
  assert.equal(v[0], 1.0);
  assert.equal(v[1], 1.0);
  assert.equal(v[2], 1.0);
});

QUnit.test("vec3 init with single values", function (assert) {
  var v = rgm.vec3(1, 2, 3);
  assert.equal(v.length, 3);
  assert.equal(v[0], 1.0);
  assert.equal(v[1], 2.0);
  assert.equal(v[2], 3.0);
});

QUnit.test("vec3 init with array", function (assert) {
  var v = rgm.vec3([1, 2, 3]);
  assert.equal(v.length, 3);
  assert.equal(v[0], 1.0);
  assert.equal(v[1], 2.0);
  assert.equal(v[2], 3.0);
});

QUnit.test("vec3 from vec2", function (assert) {
  var o = rgm.vec2(1, 2);
  var v = rgm.vec3(o);
  assert.equal(v.length, 3);
  assert.equal(v[0], 1.0);
  assert.equal(v[1], 2.0);
  assert.equal(v[2], 0.0);
});

QUnit.test("vec3 from vec4", function (assert) {
  var o = rgm.vec4(1, 2, 3, 4);
  var v = rgm.vec3(o);
  assert.equal(v.length, 3);
  assert.equal(v[0], 1.0);
  assert.equal(v[1], 2.0);
  assert.equal(v[2], 3.0);
});

QUnit.module("vec4");
QUnit.test("vec4 default is zero", function (assert) {
  var v = rgm.vec4();
  assert.equal(v.length, 4);
  assert.equal(v[0], 0.0);
  assert.equal(v[1], 0.0);
  assert.equal(v[2], 0.0);
  assert.equal(v[3], 0.0);
});

QUnit.test("vec4 single value", function (assert) {
  var v = rgm.vec4(1.0);
  assert.equal(v.length, 4);
  assert.equal(v[0], 1.0);
  assert.equal(v[1], 1.0);
  assert.equal(v[2], 1.0);
  assert.equal(v[3], 1.0);
});

QUnit.test("vec4 init with single values", function (assert) {
  var v = rgm.vec4(1, 2, 3, 4);
  assert.equal(v.length, 4);
  assert.equal(v[0], 1.0);
  assert.equal(v[1], 2.0);
  assert.equal(v[2], 3.0);
  assert.equal(v[3], 4.0);
});

QUnit.test("vec4 init with array", function (assert) {
  var v = rgm.vec4([1, 2, 3, 4]);
  assert.equal(v.length, 4);
  assert.equal(v[0], 1.0);
  assert.equal(v[1], 2.0);
  assert.equal(v[2], 3.0);
  assert.equal(v[3], 4.0);
});

QUnit.test("vec3 from vec2", function (assert) {
  var o = rgm.vec2(1, 2);
  var v = rgm.vec4(o);
  assert.equal(v.length, 4);
  assert.equal(v[0], 1.0);
  assert.equal(v[1], 2.0);
  assert.equal(v[2], 0.0);
  assert.equal(v[3], 0.0);
});

QUnit.test("vec4 from vec3", function (assert) {
  var o = rgm.vec3(1, 2, 3);
  var v = rgm.vec4(o);
  assert.equal(v.length, 4);
  assert.equal(v[0], 1.0);
  assert.equal(v[1], 2.0);
  assert.equal(v[2], 3.0);
  assert.equal(v[3], 0.0);
});

QUnit.module("mat3");
QUnit.test("mat3 default is identity", function (assert) {
  var m = rgm.mat3();
  assert.equal(m.length, 9);
  
  var r = new Float32Array([1.0, 0.0, 0.0,
                            0.0, 1.0, 0.0,
                            0.0, 0.0, 1.0]);
  
  assert.deepEqual(m, r);
});

QUnit.test("mat3 init single value", function (assert) {
  var m = rgm.mat3(2.0);
  assert.equal(m.length, 9);
  
  var r = new Float32Array([2.0, 0.0, 0.0,
                            0.0, 2.0, 0.0,
                            0.0, 0.0, 2.0]);
  
  assert.deepEqual(m, r);
});

QUnit.test("mat3 init array", function (assert) {
  
  // NOTE: rwo -> column (openGL style)
  var m = rgm.mat3([1.0, 2.0, 3.0,
                    4.0, 5.0, 6.0,
                    7.0, 8.0, 9.0]);
  
  assert.equal(m.length, 9);
  
  var r = new Float32Array([1.0, 2.0, 3.0,
                            4.0, 5.0, 6.0,
                            7.0, 8.0, 9.0]);
  
  assert.deepEqual(m, r);
});

QUnit.test("mat3 init single values", function (assert) {
  
  // NOTE: rwo -> column (openGL style)
  var m = rgm.mat3(1.0, 2.0, 3.0,
                   4.0, 5.0, 6.0,
                   7.0, 8.0, 9.0);
  
  assert.equal(m.length, 9);
  
  var r = new Float32Array([1.0, 2.0, 3.0,
                            4.0, 5.0, 6.0,
                            7.0, 8.0, 9.0]);
  
  assert.deepEqual(m, r);
});

QUnit.test("mat3 from mat4", function (assert) {
  
  var o = rgm.mat4( 1.0,  2.0,  3.0,  4.0,
                    5.0,  6.0,  7.0,  8.0,
                    9.0, 10.0, 11.0, 12.0,
                   13.0, 14.0, 15.0, 16.0);
  
  var m = rgm.mat3(o);
  
  assert.equal(m.length, 9);
  var r = rgm.mat3(1.0,  2.0,  3.0,
                   5.0,  6.0,  7.0,
                   9.0, 10.0, 11.0);
  assert.deepEqual(m, r);
});

QUnit.module("mat4");
QUnit.test("mat4 default is identity", function (assert) {
  var m = rgm.mat4();
  assert.equal(m.length, 16);
  
  var r = new Float32Array([1.0, 0.0, 0.0, 0.0,
                            0.0, 1.0, 0.0, 0.0,
                            0.0, 0.0, 1.0, 0.0,
                            0.0, 0.0, 0.0, 1.0]);
  
  assert.deepEqual(m, r);
});

QUnit.test("mat4 init single value", function (assert) {
  var m = rgm.mat4(2.0);
  assert.equal(m.length, 16);
  
  var r = new Float32Array([2.0, 0.0, 0.0, 0.0,
                            0.0, 2.0, 0.0, 0.0, 
                            0.0, 0.0, 2.0, 0.0,
                            0.0, 0.0, 0.0, 2.0]);
  
  assert.deepEqual(m, r);
});

QUnit.test("mat4 init array", function (assert) {
  
  // NOTE: rwo -> column (openGL style)
  var m = rgm.mat4([ 1.0,  2.0,  3.0,  4.0,
                     5.0,  6.0,  7.0,  8.0,
                     9.0, 10.0, 11.0, 12.0,
                    13.0, 14.0, 15.0, 16.0]);
  
  assert.equal(m.length, 16);
  
  var r = new Float32Array([ 1.0,  2.0,  3.0,  4.0,
                             5.0,  6.0,  7.0,  8.0,
                             9.0, 10.0, 11.0, 12.0,
                            13.0, 14.0, 15.0, 16.0]);
  
  assert.deepEqual(m, r);
});

QUnit.test("mat4 init single values", function (assert) {
  
  // NOTE: rwo -> column (openGL style)
  var m = rgm.mat4(1.0,  2.0,  3.0,  4.0,
                    5.0,  6.0,  7.0,  8.0,
                    9.0, 10.0, 11.0, 12.0,
                   13.0, 14.0, 15.0, 16.0);
  
  assert.equal(m.length, 16);
  
  var r = new Float32Array([ 1.0,  2.0,  3.0,  4.0,
                             5.0,  6.0,  7.0,  8.0,
                             9.0, 10.0, 11.0, 12.0,
                            13.0, 14.0, 15.0, 16.0]);
  
  assert.deepEqual(m, r);
});

QUnit.test("mat4 from mat3", function (assert) {
  
  var o = rgm.mat3( 1.0, 2.0, 3.0,  
                    4.0, 5.0, 6.0,  
                    7.0, 8.0, 9.0);
  
  var m = rgm.mat4(o);
  
  assert.equal(m.length, 16);
  var r = rgm.mat4(1.0, 2.0, 3.0, 0.0,
                   4.0, 5.0, 6.0, 0.0,
                   7.0, 8.0, 9.0, 0.0,
                   0.0, 0.0, 0.0, 1.0);
  assert.deepEqual(m, r);
});

QUnit.module("quat");
QUnit.test("quat default", function (assert) {
  var v = rgm.quat();
  assert.equal(v.length, 4);
  assert.equal(v[0], 0.0);
  assert.equal(v[1], 0.0);
  assert.equal(v[2], 0.0);
  assert.equal(1.0, v[3]);
});

QUnit.test("quat init array", function (assert) {
  var v = rgm.quat([1, 2, 3, 4]);
  assert.equal(v.length, 4);
  assert.equal(v[0], 1.0);
  assert.equal(v[1], 2.0);
  assert.equal(v[2], 3.0);
  assert.equal(4.0, v[3]);
});

QUnit.test("quat init values", function (assert) {
  var v = rgm.quat(1, 2, 3, 4);
  assert.equal(v.length, 4);
  assert.equal(v[0], 1.0);
  assert.equal(v[1], 2.0);
  assert.equal(v[2], 3.0);
  assert.equal(4.0, v[3]);
});
