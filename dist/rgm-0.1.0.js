
var rgm = {version: "0.1.0"};


rgm.vec2 = function () {
  switch (arguments.length)
  {
    case 0:
      return new Float32Array(2);
    case 1:
      if (typeof arguments[0] === "number") {
        return new Float32Array([arguments[0], arguments[0]]);
      }
      else {
        return new Float32Array(arguments[0]);
      }
    case 2:
      return new Float32Array([arguments[0], arguments[1]]);
    default:
      throw new Error('vec2: invalid number of arguments');
  }
}

rgm.vec3 = function () {
  switch (arguments.length)
  {
    case 0:
      return new Float32Array(3);
    case 1:
      if (typeof arguments[0] === "number") {
        return new Float32Array([arguments[0], arguments[0], arguments[0]]);
      }
      else {
        return new Float32Array(arguments[0]);
      }
    case 3:
      return new Float32Array([arguments[0], arguments[1], arguments[2]]);
    default:
      throw new Error('vec3: invalid number of arguments');
  }
}

rgm.vec4 = function () {
  switch (arguments.length)
  {
    case 0:
      return new Float32Array(4);
    case 1:
      if (typeof arguments[0] === "number") {
        return new Float32Array([arguments[0], arguments[0], arguments[0], arguments[0]]);
      }
      else {
        return new Float32Array(arguments[0]);
      }
    case 4:
      return new Float32Array([arguments[0], arguments[1], arguments[2], arguments[3]]);
    default:
      throw new Error('vec4: invalid number of arguments');
  }
}

rgm.mat3 = function () {
  switch (arguments.length)
  {
    case 0:
      return new Float32Array([1.0, 0.0, 0.0,
                               0.0, 1.0, 0.0,
                               0.0, 0.0, 1.0]);
    case 1:
      if (typeof arguments[0] === "number") {
        return new Float32Array([arguments[0],          0.0,          0.0,
                                          0.0, arguments[0],          0.0,
                                          0.0,          0.0, arguments[0]]);
      }
      else {
        return new Float32Array(arguments[0]);
      }
    case 9:
      return new Float32Array([arguments[0], arguments[1], arguments[2], 
                               arguments[3], arguments[4], arguments[5],
                               arguments[6], arguments[7], arguments[8]]);
    default:
      throw new Error('vec2: invalid number of arguments');
  }
}

rgm.mat4 = function () {
  switch (arguments.length)
  {
    case 0:
      return new Float32Array([1.0, 0.0, 0.0, 0.0,
                               0.0, 1.0, 0.0, 0.0,
                               0.0, 0.0, 1.0, 0.0,
                               0.0, 0.0, 0.0, 1.0]);
    case 1:
      if (typeof arguments[0] === "number") {
        return new Float32Array([arguments[0],          0.0,          0.0,          0.0,
                                          0.0, arguments[0],          0.0,          0.0,
                                          0.0,          0.0, arguments[0],          0.0,
                                          0.0,          0.0,          0.0, arguments[0]]);
      }
      else {
        return new Float32Array(arguments[0]);
      }
    case 16:
      return new Float32Array([arguments[ 0], arguments[ 1], arguments[ 2], arguments[ 3], 
                               arguments[ 4], arguments[ 5], arguments[ 6], arguments[ 7], 
                               arguments[ 8], arguments[ 9], arguments[10], arguments[11],
                               arguments[12], arguments[13], arguments[14], arguments[15]]);
    default:
      throw new Error('vec2: invalid number of arguments');
  }
}

rgm.quat = function () {
  switch (arguments.length)
  {
    case 0:
      return rgm.vec4(0, 0, 0, 1);
    case 1:
      return rgm.vec4(arguments[0]);     
    case 4:
      return rgm.vec4([arguments[0], arguments[1], arguments[2], arguments[3]]);
    default:
      throw new Error('vec2: invalid number of arguments');
  }
}


rgm.add = function (a, b) {
  if (a.length != b.length) {
    throw Error('add: a and b must be the same dimension');
  }
  
  var r = new Float32Array(a.length);
  for (var i = 0; i < a.length; i++) {
    r[i] = a[i] + b[i];
  }
  
  return r;
}

rgm.sub = function (a, b) {
  if (a.length != b.length) {
    throw Error('sub: a and b must be the same dimension');
  }
  
  var r = new Float32Array(a.length);
  for (var i = 0; i < a.length; i++) {
    r[i] = a[i] - b[i];
  }
  
  return r;
}

rgm.neg = function (a) {
  var r = new Float32Array(a.length);
  for (var i = 0; i < a.length; i++) {
    r[i] = -a[i];
  }
  
  return r;
}

rgm.dot = function (a, b) {
  var v = 0;
  for (var i = 0; i < a.length; i++) {
    v += a[i] * b[i];
  }
  return v;
}

rgm.cross = function (a, b) {
  if (a.length != 3 ||
      b.length != 3) {
    throw Error('cross: a and b must be 3D');
  }
  
  var r = new Float32Array(3);
  
  r[0] = (a[1] * b[2]) - (a[2] * b[1]);
  r[1] = (a[2] * b[0]) - (a[0] * b[2]);
  r[2] = (a[0] * b[1]) - (a[1] * b[0]);
  
  return r;
}

rgm.vmult = function (a, b) {
  if (a.length != b.length) {
    throw Error('vmult: a and b must be the same dimension');
  }
  
  var r = new Float32Array(a.length);
  for (var i = 0; i < a.length; i++) {
    r[i] = a[i] * b[i];
  }
  return r;
}

rgm.vsmult = function (v, s) {
  var r = new Float32Array(v.length);
  for (var i = 0; i < v.length; i++) {
    r[i] = v[i] * s;
  }
  return r;
}

rgm.length = function (v) {  
  return Math.sqrt(rgm.dot(v, v));
}

rgm.normalize = function (v) {
  return rgm.vsmult(v, 1.0 / rgm.length(v));
}

rgm.mmult = function (a, b) {
  if (a.length != b.length) {
    throw Error('mmult: a and b must be the same dimension');
  }
  
  var n = Math.sqrt(a.length);
  var r = new Float32Array(a.length);
  
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      var v = 0;
      for (var k = 0; k < n; k++) {
        v = v + a[i*n+k] * b[k*n+j];
      }
      r[i*n+j] = v;
    }
  }
  
  return r;
}

rgm.transpose = function(m) {    
  var n = Math.sqrt(m.length);
  var r = new Float32Array(m.length);
  
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      r[j*n+i] = m[i*n+j];
    }
  }
  
  return r;
}

rgm.mvmult = function (m, v) {
	var n = v.length;
	var r = new Float32Array(n);
	
	for (var i = 0; i < n; i++)
	{
		r[i] = 0;
		for (var j = 0; j < n; j++)
		{
				r[i] += m[j*n+i] * v[j];
		}
	}
	
	return r;
}

rgm.qmult = function (a, b) {
  var wa = a[3];
  var va = rgm.vec3(a[0], a[1], a[2]);
  var wb = b[3];
  var vb = rgm.vec3(b[0], b[1], b[2]);
  
  var w = wa * wb - rgm.dot(va, vb);
  var v = rgm.add(rgm.add(rgm.vsmult(vb, wa), rgm.vsmult(va, wb)), rgm.cross(va, vb));

  return rgm.quat(v[0], v[1], va[2], w);
}




rgm.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

rgm.degrees = function(radians) {
  return radians * 180 / Math.PI;
}; 


rgm.ortho = function (left, right, bottom, top, near, far) {
  var rl = (right - left);
  var tb = (top - bottom);
  var fn = (far - near);
  
  var m = rgm.mat4();  
  
  m[0] = 2 / rl;
  m[1] = 0;
  m[2] = 0;
  m[3] = 0;
  m[4] = 0;
  m[5] = 2 / tb;
  m[6] = 0;
  m[7] = 0;
  m[8] = 0;
  m[9] = 0;
  m[10] = -2 / fn;
  m[11] = 0;
  m[12] = -(left + right) / rl;
  m[13] = -(top + bottom) / tb;
  m[14] = -(far + near) / fn;
  m[15] = 1;

  return m;
}

rgm.frustum = function (left, right, bottom, top, znear, zfar) {
  var t1 = 2 * znear;
  var t2 = right - left;
  var t3 = top - bottom;
  var t4 = zfar - znear;

  var m = new Float32Array(16);
  
  m[0] = t1/t2; m[4] =     0; m[ 8] =  (right + left) / t2; m[12] =                 0;
  m[1] =     0; m[5] = t1/t3; m[ 9] =  (top + bottom) / t3; m[13] =                 0;
  m[2] =     0; m[6] =     0; m[10] = (-zfar - znear) / t4; m[14] = (-t1 * zfar) / t4;
  m[3] =     0; m[7] =     0; m[11] =                   -1; m[15] =                 0;
  
  return m;
}

rgm.perspective = function (fovy, aspect, znear, zfar) {
  var ymax = znear * Math.tan(rgm.radians(fovy));
  var xmax = ymax * aspect;
  return rgm.frustum(-xmax, xmax, -ymax, ymax, znear, zfar);
}

// NOTE: this is inefficient, it may be sensible to provide inplace versions
rgm.translate = function(m, x, y, z) {    
  var r = rgm.mat4(m);
  r[12] = m[0] * x + m[4] * y + m[ 8] * z + m[12];
  r[13] = m[1] * x + m[5] * y + m[ 9] * z + m[13];
  r[14] = m[2] * x + m[6] * y + m[10] * z + m[14];
  r[15] = m[3] * x + m[7] * y + m[11] * z + m[15];
  return r;
}

rgm.rotate = function (m, angle, x, y, z) {  
  var a = rgm.radians(angle);
  var c = Math.cos(a);
  var s = Math.sin(a);
  
  var l = Math.sqrt(x * x + y * y + z * z);
  var nx = x / l;
  var ny = y / l;
  var nz = z / l;

  var t0 = nx * (1 - c);
  var t1 = ny * (1 - c);
  var t2 = nz * (1 - c);  

  var d = rgm.mat4(1);
  
  d[ 0] = c + t0 * nx;
  d[ 1] = 0 + t0 * ny + s * nz;
  d[ 2] = 0 + t0 * nz - s * ny;

  d[ 4] = 0 + t1 * nx - s * nz;
  d[ 5] = c + t1 * ny;
  d[ 6] = 0 + t1 * nz + s * nx;

  d[ 8] = 0 + t2 * nx + s * ny;
  d[ 9] = 0 + t2 * ny - s * nx;
  d[10] = c + t2 * nz;  
  
  var r = rgm.mmult(m, d);
  
  r[12] = m[12];
  r[13] = m[13];
  r[14] = m[14];
  r[15] = m[15];
  
  return r;
}

rgm.scale = function(m, x, y, z) {    
  var r = rgm.mat4(1);
  
  r[ 0] = m[ 0] * x; 
  r[ 1] = m[ 1] * x; 
  r[ 2] = m[ 2] * x; 
  r[ 3] = m[ 3] * x; 
  
  r[ 4] = m[ 4] * y; 
  r[ 5] = m[ 5] * y; 
  r[ 6] = m[ 6] * y; 
  r[ 7] = m[ 7] * y; 
  
  r[ 8] = m[ 8] * z;
  r[ 9] = m[ 9] * z;
  r[10] = m[10] * z;
  r[11] = m[11] * z;
  
  r[12] = m[12];
  r[13] = m[13];
  r[14] = m[14];
  r[15] = m[15];
  
  return r;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9pbml0Xy5qcyIsImNvbnN0cnVjdG9ycy5qcyIsImZ1bmN0aW9ucy5qcyIsInRyYW5zZm9ybXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJyZ20tMC4xLjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIHJnbSA9IHt2ZXJzaW9uOiBcIjAuMS4wXCJ9O1xyXG4iLCJcclxucmdtLnZlYzIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKVxyXG4gIHtcclxuICAgIGNhc2UgMDpcclxuICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoMik7XHJcbiAgICBjYXNlIDE6XHJcbiAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW2FyZ3VtZW50c1swXSwgYXJndW1lbnRzWzBdXSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoYXJndW1lbnRzWzBdKTtcclxuICAgICAgfVxyXG4gICAgY2FzZSAyOlxyXG4gICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV1dKTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigndmVjMjogaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzJyk7XHJcbiAgfVxyXG59XHJcblxyXG5yZ20udmVjMyA9IGZ1bmN0aW9uICgpIHtcclxuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpXHJcbiAge1xyXG4gICAgY2FzZSAwOlxyXG4gICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSgzKTtcclxuICAgIGNhc2UgMTpcclxuICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1swXV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KGFyZ3VtZW50c1swXSk7XHJcbiAgICAgIH1cclxuICAgIGNhc2UgMzpcclxuICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW2FyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl1dKTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigndmVjMzogaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzJyk7XHJcbiAgfVxyXG59XHJcblxyXG5yZ20udmVjNCA9IGZ1bmN0aW9uICgpIHtcclxuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpXHJcbiAge1xyXG4gICAgY2FzZSAwOlxyXG4gICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSg0KTtcclxuICAgIGNhc2UgMTpcclxuICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzBdXSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoYXJndW1lbnRzWzBdKTtcclxuICAgICAgfVxyXG4gICAgY2FzZSA0OlxyXG4gICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdXSk7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3ZlYzQ6IGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cycpO1xyXG4gIH1cclxufVxyXG5cclxucmdtLm1hdDMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKVxyXG4gIHtcclxuICAgIGNhc2UgMDpcclxuICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoWzEuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAsIDEuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDEuMF0pO1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFthcmd1bWVudHNbMF0sICAgICAgICAgIDAuMCwgICAgICAgICAgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAsIGFyZ3VtZW50c1swXSwgICAgICAgICAgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAsICAgICAgICAgIDAuMCwgYXJndW1lbnRzWzBdXSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoYXJndW1lbnRzWzBdKTtcclxuICAgICAgfVxyXG4gICAgY2FzZSA5OlxyXG4gICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbM10sIGFyZ3VtZW50c1s0XSwgYXJndW1lbnRzWzVdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzZdLCBhcmd1bWVudHNbN10sIGFyZ3VtZW50c1s4XV0pO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCd2ZWMyOiBpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHMnKTtcclxuICB9XHJcbn1cclxuXHJcbnJnbS5tYXQ0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aClcclxuICB7XHJcbiAgICBjYXNlIDA6XHJcbiAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFsxLjAsIDAuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAsIDEuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMS4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAxLjBdKTtcclxuICAgIGNhc2UgMTpcclxuICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbYXJndW1lbnRzWzBdLCAgICAgICAgICAwLjAsICAgICAgICAgIDAuMCwgICAgICAgICAgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAsIGFyZ3VtZW50c1swXSwgICAgICAgICAgMC4wLCAgICAgICAgICAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMCwgICAgICAgICAgMC4wLCBhcmd1bWVudHNbMF0sICAgICAgICAgIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAgICAgICAwLjAsICAgICAgICAgIDAuMCwgYXJndW1lbnRzWzBdXSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoYXJndW1lbnRzWzBdKTtcclxuICAgICAgfVxyXG4gICAgY2FzZSAxNjpcclxuICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW2FyZ3VtZW50c1sgMF0sIGFyZ3VtZW50c1sgMV0sIGFyZ3VtZW50c1sgMl0sIGFyZ3VtZW50c1sgM10sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWyA0XSwgYXJndW1lbnRzWyA1XSwgYXJndW1lbnRzWyA2XSwgYXJndW1lbnRzWyA3XSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbIDhdLCBhcmd1bWVudHNbIDldLCBhcmd1bWVudHNbMTBdLCBhcmd1bWVudHNbMTFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzEyXSwgYXJndW1lbnRzWzEzXSwgYXJndW1lbnRzWzE0XSwgYXJndW1lbnRzWzE1XV0pO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCd2ZWMyOiBpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHMnKTtcclxuICB9XHJcbn1cclxuXHJcbnJnbS5xdWF0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aClcclxuICB7XHJcbiAgICBjYXNlIDA6XHJcbiAgICAgIHJldHVybiByZ20udmVjNCgwLCAwLCAwLCAxKTtcclxuICAgIGNhc2UgMTpcclxuICAgICAgcmV0dXJuIHJnbS52ZWM0KGFyZ3VtZW50c1swXSk7ICAgICBcclxuICAgIGNhc2UgNDpcclxuICAgICAgcmV0dXJuIHJnbS52ZWM0KFthcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM11dKTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigndmVjMjogaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzJyk7XHJcbiAgfVxyXG59XHJcbiIsIlxyXG5yZ20uYWRkID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICBpZiAoYS5sZW5ndGggIT0gYi5sZW5ndGgpIHtcclxuICAgIHRocm93IEVycm9yKCdhZGQ6IGEgYW5kIGIgbXVzdCBiZSB0aGUgc2FtZSBkaW1lbnNpb24nKTtcclxuICB9XHJcbiAgXHJcbiAgdmFyIHIgPSBuZXcgRmxvYXQzMkFycmF5KGEubGVuZ3RoKTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcclxuICAgIHJbaV0gPSBhW2ldICsgYltpXTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbnJnbS5zdWIgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gIGlmIChhLmxlbmd0aCAhPSBiLmxlbmd0aCkge1xyXG4gICAgdGhyb3cgRXJyb3IoJ3N1YjogYSBhbmQgYiBtdXN0IGJlIHRoZSBzYW1lIGRpbWVuc2lvbicpO1xyXG4gIH1cclxuICBcclxuICB2YXIgciA9IG5ldyBGbG9hdDMyQXJyYXkoYS5sZW5ndGgpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgcltpXSA9IGFbaV0gLSBiW2ldO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gcjtcclxufVxyXG5cclxucmdtLm5lZyA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgdmFyIHIgPSBuZXcgRmxvYXQzMkFycmF5KGEubGVuZ3RoKTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcclxuICAgIHJbaV0gPSAtYVtpXTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbnJnbS5kb3QgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gIHZhciB2ID0gMDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcclxuICAgIHYgKz0gYVtpXSAqIGJbaV07XHJcbiAgfVxyXG4gIHJldHVybiB2O1xyXG59XHJcblxyXG5yZ20uY3Jvc3MgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gIGlmIChhLmxlbmd0aCAhPSAzIHx8XHJcbiAgICAgIGIubGVuZ3RoICE9IDMpIHtcclxuICAgIHRocm93IEVycm9yKCdjcm9zczogYSBhbmQgYiBtdXN0IGJlIDNEJyk7XHJcbiAgfVxyXG4gIFxyXG4gIHZhciByID0gbmV3IEZsb2F0MzJBcnJheSgzKTtcclxuICBcclxuICByWzBdID0gKGFbMV0gKiBiWzJdKSAtIChhWzJdICogYlsxXSk7XHJcbiAgclsxXSA9IChhWzJdICogYlswXSkgLSAoYVswXSAqIGJbMl0pO1xyXG4gIHJbMl0gPSAoYVswXSAqIGJbMV0pIC0gKGFbMV0gKiBiWzBdKTtcclxuICBcclxuICByZXR1cm4gcjtcclxufVxyXG5cclxucmdtLnZtdWx0ID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICBpZiAoYS5sZW5ndGggIT0gYi5sZW5ndGgpIHtcclxuICAgIHRocm93IEVycm9yKCd2bXVsdDogYSBhbmQgYiBtdXN0IGJlIHRoZSBzYW1lIGRpbWVuc2lvbicpO1xyXG4gIH1cclxuICBcclxuICB2YXIgciA9IG5ldyBGbG9hdDMyQXJyYXkoYS5sZW5ndGgpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgcltpXSA9IGFbaV0gKiBiW2ldO1xyXG4gIH1cclxuICByZXR1cm4gcjtcclxufVxyXG5cclxucmdtLnZzbXVsdCA9IGZ1bmN0aW9uICh2LCBzKSB7XHJcbiAgdmFyIHIgPSBuZXcgRmxvYXQzMkFycmF5KHYubGVuZ3RoKTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcclxuICAgIHJbaV0gPSB2W2ldICogcztcclxuICB9XHJcbiAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbnJnbS5sZW5ndGggPSBmdW5jdGlvbiAodikgeyAgXHJcbiAgcmV0dXJuIE1hdGguc3FydChyZ20uZG90KHYsIHYpKTtcclxufVxyXG5cclxucmdtLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgcmV0dXJuIHJnbS52c211bHQodiwgMS4wIC8gcmdtLmxlbmd0aCh2KSk7XHJcbn1cclxuXHJcbnJnbS5tbXVsdCA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgaWYgKGEubGVuZ3RoICE9IGIubGVuZ3RoKSB7XHJcbiAgICB0aHJvdyBFcnJvcignbW11bHQ6IGEgYW5kIGIgbXVzdCBiZSB0aGUgc2FtZSBkaW1lbnNpb24nKTtcclxuICB9XHJcbiAgXHJcbiAgdmFyIG4gPSBNYXRoLnNxcnQoYS5sZW5ndGgpO1xyXG4gIHZhciByID0gbmV3IEZsb2F0MzJBcnJheShhLmxlbmd0aCk7XHJcbiAgXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgbjsgaisrKSB7XHJcbiAgICAgIHZhciB2ID0gMDtcclxuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBuOyBrKyspIHtcclxuICAgICAgICB2ID0gdiArIGFbaSpuK2tdICogYltrKm4ral07XHJcbiAgICAgIH1cclxuICAgICAgcltpKm4ral0gPSB2O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gcjtcclxufVxyXG5cclxucmdtLnRyYW5zcG9zZSA9IGZ1bmN0aW9uKG0pIHsgICAgXHJcbiAgdmFyIG4gPSBNYXRoLnNxcnQobS5sZW5ndGgpO1xyXG4gIHZhciByID0gbmV3IEZsb2F0MzJBcnJheShtLmxlbmd0aCk7XHJcbiAgXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgbjsgaisrKSB7XHJcbiAgICAgIHJbaipuK2ldID0gbVtpKm4ral07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiByO1xyXG59XHJcblxyXG5yZ20ubXZtdWx0ID0gZnVuY3Rpb24gKG0sIHYpIHtcclxuXHR2YXIgbiA9IHYubGVuZ3RoO1xyXG5cdHZhciByID0gbmV3IEZsb2F0MzJBcnJheShuKTtcclxuXHRcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKylcclxuXHR7XHJcblx0XHRyW2ldID0gMDtcclxuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgbjsgaisrKVxyXG5cdFx0e1xyXG5cdFx0XHRcdHJbaV0gKz0gbVtqKm4raV0gKiB2W2pdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gcjtcclxufVxyXG5cclxucmdtLnFtdWx0ID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICB2YXIgd2EgPSBhWzNdO1xyXG4gIHZhciB2YSA9IHJnbS52ZWMzKGFbMF0sIGFbMV0sIGFbMl0pO1xyXG4gIHZhciB3YiA9IGJbM107XHJcbiAgdmFyIHZiID0gcmdtLnZlYzMoYlswXSwgYlsxXSwgYlsyXSk7XHJcbiAgXHJcbiAgdmFyIHcgPSB3YSAqIHdiIC0gcmdtLmRvdCh2YSwgdmIpO1xyXG4gIHZhciB2ID0gcmdtLmFkZChyZ20uYWRkKHJnbS52c211bHQodmIsIHdhKSwgcmdtLnZzbXVsdCh2YSwgd2IpKSwgcmdtLmNyb3NzKHZhLCB2YikpO1xyXG5cclxuICByZXR1cm4gcmdtLnF1YXQodlswXSwgdlsxXSwgdmFbMl0sIHcpO1xyXG59XHJcblxyXG4iLCJcclxuXHJcbnJnbS5yYWRpYW5zID0gZnVuY3Rpb24oZGVncmVlcykge1xyXG4gIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcclxufTtcclxuXHJcbnJnbS5kZWdyZWVzID0gZnVuY3Rpb24ocmFkaWFucykge1xyXG4gIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcclxufTsgXHJcblxyXG5cclxucmdtLm9ydGhvID0gZnVuY3Rpb24gKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XHJcbiAgdmFyIHJsID0gKHJpZ2h0IC0gbGVmdCk7XHJcbiAgdmFyIHRiID0gKHRvcCAtIGJvdHRvbSk7XHJcbiAgdmFyIGZuID0gKGZhciAtIG5lYXIpO1xyXG4gIFxyXG4gIHZhciBtID0gcmdtLm1hdDQoKTsgIFxyXG4gIFxyXG4gIG1bMF0gPSAyIC8gcmw7XHJcbiAgbVsxXSA9IDA7XHJcbiAgbVsyXSA9IDA7XHJcbiAgbVszXSA9IDA7XHJcbiAgbVs0XSA9IDA7XHJcbiAgbVs1XSA9IDIgLyB0YjtcclxuICBtWzZdID0gMDtcclxuICBtWzddID0gMDtcclxuICBtWzhdID0gMDtcclxuICBtWzldID0gMDtcclxuICBtWzEwXSA9IC0yIC8gZm47XHJcbiAgbVsxMV0gPSAwO1xyXG4gIG1bMTJdID0gLShsZWZ0ICsgcmlnaHQpIC8gcmw7XHJcbiAgbVsxM10gPSAtKHRvcCArIGJvdHRvbSkgLyB0YjtcclxuICBtWzE0XSA9IC0oZmFyICsgbmVhcikgLyBmbjtcclxuICBtWzE1XSA9IDE7XHJcblxyXG4gIHJldHVybiBtO1xyXG59XHJcblxyXG5yZ20uZnJ1c3R1bSA9IGZ1bmN0aW9uIChsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIHpuZWFyLCB6ZmFyKSB7XHJcbiAgdmFyIHQxID0gMiAqIHpuZWFyO1xyXG4gIHZhciB0MiA9IHJpZ2h0IC0gbGVmdDtcclxuICB2YXIgdDMgPSB0b3AgLSBib3R0b207XHJcbiAgdmFyIHQ0ID0gemZhciAtIHpuZWFyO1xyXG5cclxuICB2YXIgbSA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xyXG4gIFxyXG4gIG1bMF0gPSB0MS90MjsgbVs0XSA9ICAgICAwOyBtWyA4XSA9ICAocmlnaHQgKyBsZWZ0KSAvIHQyOyBtWzEyXSA9ICAgICAgICAgICAgICAgICAwO1xyXG4gIG1bMV0gPSAgICAgMDsgbVs1XSA9IHQxL3QzOyBtWyA5XSA9ICAodG9wICsgYm90dG9tKSAvIHQzOyBtWzEzXSA9ICAgICAgICAgICAgICAgICAwO1xyXG4gIG1bMl0gPSAgICAgMDsgbVs2XSA9ICAgICAwOyBtWzEwXSA9ICgtemZhciAtIHpuZWFyKSAvIHQ0OyBtWzE0XSA9ICgtdDEgKiB6ZmFyKSAvIHQ0O1xyXG4gIG1bM10gPSAgICAgMDsgbVs3XSA9ICAgICAwOyBtWzExXSA9ICAgICAgICAgICAgICAgICAgIC0xOyBtWzE1XSA9ICAgICAgICAgICAgICAgICAwO1xyXG4gIFxyXG4gIHJldHVybiBtO1xyXG59XHJcblxyXG5yZ20ucGVyc3BlY3RpdmUgPSBmdW5jdGlvbiAoZm92eSwgYXNwZWN0LCB6bmVhciwgemZhcikge1xyXG4gIHZhciB5bWF4ID0gem5lYXIgKiBNYXRoLnRhbihyZ20ucmFkaWFucyhmb3Z5KSk7XHJcbiAgdmFyIHhtYXggPSB5bWF4ICogYXNwZWN0O1xyXG4gIHJldHVybiByZ20uZnJ1c3R1bSgteG1heCwgeG1heCwgLXltYXgsIHltYXgsIHpuZWFyLCB6ZmFyKTtcclxufVxyXG5cclxuLy8gTk9URTogdGhpcyBpcyBpbmVmZmljaWVudCwgaXQgbWF5IGJlIHNlbnNpYmxlIHRvIHByb3ZpZGUgaW5wbGFjZSB2ZXJzaW9uc1xyXG5yZ20udHJhbnNsYXRlID0gZnVuY3Rpb24obSwgeCwgeSwgeikgeyAgICBcclxuICB2YXIgciA9IHJnbS5tYXQ0KG0pO1xyXG4gIHJbMTJdID0gbVswXSAqIHggKyBtWzRdICogeSArIG1bIDhdICogeiArIG1bMTJdO1xyXG4gIHJbMTNdID0gbVsxXSAqIHggKyBtWzVdICogeSArIG1bIDldICogeiArIG1bMTNdO1xyXG4gIHJbMTRdID0gbVsyXSAqIHggKyBtWzZdICogeSArIG1bMTBdICogeiArIG1bMTRdO1xyXG4gIHJbMTVdID0gbVszXSAqIHggKyBtWzddICogeSArIG1bMTFdICogeiArIG1bMTVdO1xyXG4gIHJldHVybiByO1xyXG59XHJcblxyXG5yZ20ucm90YXRlID0gZnVuY3Rpb24gKG0sIGFuZ2xlLCB4LCB5LCB6KSB7ICBcclxuICB2YXIgYSA9IHJnbS5yYWRpYW5zKGFuZ2xlKTtcclxuICB2YXIgYyA9IE1hdGguY29zKGEpO1xyXG4gIHZhciBzID0gTWF0aC5zaW4oYSk7XHJcbiAgXHJcbiAgdmFyIGwgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcclxuICB2YXIgbnggPSB4IC8gbDtcclxuICB2YXIgbnkgPSB5IC8gbDtcclxuICB2YXIgbnogPSB6IC8gbDtcclxuXHJcbiAgdmFyIHQwID0gbnggKiAoMSAtIGMpO1xyXG4gIHZhciB0MSA9IG55ICogKDEgLSBjKTtcclxuICB2YXIgdDIgPSBueiAqICgxIC0gYyk7ICBcclxuXHJcbiAgdmFyIGQgPSByZ20ubWF0NCgxKTtcclxuICBcclxuICBkWyAwXSA9IGMgKyB0MCAqIG54O1xyXG4gIGRbIDFdID0gMCArIHQwICogbnkgKyBzICogbno7XHJcbiAgZFsgMl0gPSAwICsgdDAgKiBueiAtIHMgKiBueTtcclxuXHJcbiAgZFsgNF0gPSAwICsgdDEgKiBueCAtIHMgKiBuejtcclxuICBkWyA1XSA9IGMgKyB0MSAqIG55O1xyXG4gIGRbIDZdID0gMCArIHQxICogbnogKyBzICogbng7XHJcblxyXG4gIGRbIDhdID0gMCArIHQyICogbnggKyBzICogbnk7XHJcbiAgZFsgOV0gPSAwICsgdDIgKiBueSAtIHMgKiBueDtcclxuICBkWzEwXSA9IGMgKyB0MiAqIG56OyAgXHJcbiAgXHJcbiAgdmFyIHIgPSByZ20ubW11bHQobSwgZCk7XHJcbiAgXHJcbiAgclsxMl0gPSBtWzEyXTtcclxuICByWzEzXSA9IG1bMTNdO1xyXG4gIHJbMTRdID0gbVsxNF07XHJcbiAgclsxNV0gPSBtWzE1XTtcclxuICBcclxuICByZXR1cm4gcjtcclxufVxyXG5cclxucmdtLnNjYWxlID0gZnVuY3Rpb24obSwgeCwgeSwgeikgeyAgICBcclxuICB2YXIgciA9IHJnbS5tYXQ0KDEpO1xyXG4gIFxyXG4gIHJbIDBdID0gbVsgMF0gKiB4OyBcclxuICByWyAxXSA9IG1bIDFdICogeDsgXHJcbiAgclsgMl0gPSBtWyAyXSAqIHg7IFxyXG4gIHJbIDNdID0gbVsgM10gKiB4OyBcclxuICBcclxuICByWyA0XSA9IG1bIDRdICogeTsgXHJcbiAgclsgNV0gPSBtWyA1XSAqIHk7IFxyXG4gIHJbIDZdID0gbVsgNl0gKiB5OyBcclxuICByWyA3XSA9IG1bIDddICogeTsgXHJcbiAgXHJcbiAgclsgOF0gPSBtWyA4XSAqIHo7XHJcbiAgclsgOV0gPSBtWyA5XSAqIHo7XHJcbiAgclsxMF0gPSBtWzEwXSAqIHo7XHJcbiAgclsxMV0gPSBtWzExXSAqIHo7XHJcbiAgXHJcbiAgclsxMl0gPSBtWzEyXTtcclxuICByWzEzXSA9IG1bMTNdO1xyXG4gIHJbMTRdID0gbVsxNF07XHJcbiAgclsxNV0gPSBtWzE1XTtcclxuICBcclxuICByZXR1cm4gcjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=