
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
        switch (arguments[0].length) {
          case 2:
            return new Float32Array(arguments[0]);        
          case 3:
          case 4:
            return new Float32Array([arguments[0][0], arguments[0][1]]);        
          default:
            throw new Error('vec2: invalid array size');
        }
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
        switch (arguments[0].length) {
          case 2:
            return new Float32Array([arguments[0][0], arguments[0][1], 0.0]);        
          case 3:
            return new Float32Array(arguments[0]);        
          case 4:
            return new Float32Array([arguments[0][0], arguments[0][1], arguments[0][2]]);        
          default:
            throw new Error('vec3: invalid array size');
        }       
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
        switch (arguments[0].length) {
          case 2:
            return new Float32Array([arguments[0][0], arguments[0][1], 0.0, 0.0]);        
          case 3:
            return new Float32Array([arguments[0][0], arguments[0][1], arguments[0][2], 0.0]);        
          case 4:
            return new Float32Array(arguments[0]);        
          default:
            throw new Error('vec3: invalid array size');
        }
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
        switch (arguments[0].length) {
          case 9:
            return new Float32Array(arguments[0]);        
          case 16:
            return new Float32Array([arguments[0][0], arguments[0][1], arguments[0][ 2],
                                     arguments[0][4], arguments[0][5], arguments[0][ 6],
                                     arguments[0][8], arguments[0][9], arguments[0][10]]);
          default:
            throw new Error('mat3: invalid array size');
        }        
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
        switch (arguments[0].length) {
          case 9:
            return new Float32Array([arguments[0][0], arguments[0][1], arguments[0][2], 0.0,
                                     arguments[0][3], arguments[0][4], arguments[0][5], 0.0,
                                     arguments[0][6], arguments[0][7], arguments[0][8], 0.0,
                                                 0.0,             0.0,             0.0, 1.0]);
          case 16:
            return new Float32Array(arguments[0]);
          default:
            throw new Error('mat3: invalid array size');
        }        
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

rgm.qconjugate = function (q) {
  return rgm.quat(-q[0], -q[1], -q[2], q[3]);
}

rgm.quat2mat4 = function (q) {
  var xx = q[0] * q[0];
  var xy = q[0] * q[1];
  var xz = q[0] * q[2];
  var xw = q[0] * q[3];
  var yy = q[1] * q[1];
  var yz = q[1] * q[2];
  var yw = q[1] * q[3];
  var zz = q[2] * q[2];
  var zw = q[2] * q[3];
  
  var mat = rgm.mat4(1);
  mat[0]  = 1 - 2 * (yy + zz);
  mat[4]  =     2 * (xy - zw);
  mat[8]  =     2 * (xz + yw);
  mat[1]  =     2 * (xy + zw);
  mat[5]  = 1 - 2 * (xx + zz);
  mat[9]  =     2 * (yz - xw);
  mat[2]  =     2 * (xz - yw);
  mat[6]  =     2 * (yz + xw);
  mat[10] = 1 - 2 * (xx + yy);
  mat[3]  = mat[7] = mat[11] = mat[12] = mat[13] = mat[14] = 0;
  mat[15] = 1;
  
  return mat;
}

rgm.equal = function (a, b, eps) {
  if (a.length != b.length) {
    return false;
  }
  
  var e = (eps !== undefined) ? eps : 1e-6;
  
  for (var i = 0; i < a.length; i++) {
    if (Math.abs(a[i] - b[i]) > e) {
      return false;
    }
  }
  
  return true;
}


rgm.radians = function(degrees) {
  return degrees * (Math.PI / 180.0);
};

rgm.degrees = function(radians) {
  return radians * (180.0 / Math.PI);
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

rgm.qrotate = function (angle, axis) {
  var an    = rgm.normalize(axis);
  var sin_a = Math.sin(rgm.radians(angle/2.0));
  var cos_a = Math.cos(rgm.radians(angle/2.0));
  var x = an[0] * sin_a;
  var y = an[1] * sin_a;
  var z = an[2] * sin_a;
  var w = cos_a;
  return rgm.quat(x, y, z, w);
}

rgm.qtransform = function (q, v) {
  var qn = rgm.normalize(q)  
  var qv = rgm.quat(v[0], v[1], v[2], 0);
  var qc = rgm.qconjugate(qn);
  
  var qr = rgm.qmult(rgm.qmult(qn, qv), qc);
  
  return rgm.vec3(qr[0], qr[1], qr[2]);
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9pbml0Xy5qcyIsImNvbnN0cnVjdG9ycy5qcyIsImZ1bmN0aW9ucy5qcyIsInRyYW5zZm9ybXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJyZ20tMC4xLjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciByZ20gPSB7dmVyc2lvbjogXCIwLjEuMFwifTtcbiIsIlxucmdtLnZlYzIgPSBmdW5jdGlvbiAoKSB7XG4gIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aClcbiAge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KDIpO1xuICAgIGNhc2UgMTpcbiAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFthcmd1bWVudHNbMF0sIGFyZ3VtZW50c1swXV0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN3aXRjaCAoYXJndW1lbnRzWzBdLmxlbmd0aCkge1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KGFyZ3VtZW50c1swXSk7ICAgICAgICBcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW2FyZ3VtZW50c1swXVswXSwgYXJndW1lbnRzWzBdWzFdXSk7ICAgICAgICBcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd2ZWMyOiBpbnZhbGlkIGFycmF5IHNpemUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFthcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXV0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3ZlYzI6IGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cycpO1xuICB9XG59XG5cbnJnbS52ZWMzID0gZnVuY3Rpb24gKCkge1xuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpXG4gIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSgzKTtcbiAgICBjYXNlIDE6XG4gICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1swXV0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7ICAgICAgICBcbiAgICAgICAgc3dpdGNoIChhcmd1bWVudHNbMF0ubGVuZ3RoKSB7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW2FyZ3VtZW50c1swXVswXSwgYXJndW1lbnRzWzBdWzFdLCAwLjBdKTsgICAgICAgIFxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KGFyZ3VtZW50c1swXSk7ICAgICAgICBcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbYXJndW1lbnRzWzBdWzBdLCBhcmd1bWVudHNbMF1bMV0sIGFyZ3VtZW50c1swXVsyXV0pOyAgICAgICAgXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndmVjMzogaW52YWxpZCBhcnJheSBzaXplJyk7XG4gICAgICAgIH0gICAgICAgXG4gICAgICB9ICAgICAgXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW2FyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl1dKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCd2ZWMzOiBpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHMnKTtcbiAgfVxufVxuXG5yZ20udmVjNCA9IGZ1bmN0aW9uICgpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKVxuICB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoNCk7XG4gICAgY2FzZSAxOlxuICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW2FyZ3VtZW50c1swXSwgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1swXV0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7ICAgICAgICBcbiAgICAgICAgc3dpdGNoIChhcmd1bWVudHNbMF0ubGVuZ3RoKSB7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW2FyZ3VtZW50c1swXVswXSwgYXJndW1lbnRzWzBdWzFdLCAwLjAsIDAuMF0pOyAgICAgICAgXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW2FyZ3VtZW50c1swXVswXSwgYXJndW1lbnRzWzBdWzFdLCBhcmd1bWVudHNbMF1bMl0sIDAuMF0pOyAgICAgICAgXG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoYXJndW1lbnRzWzBdKTsgICAgICAgIFxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3ZlYzM6IGludmFsaWQgYXJyYXkgc2l6ZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW2FyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXV0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3ZlYzQ6IGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cycpO1xuICB9XG59XG5cbnJnbS5tYXQzID0gZnVuY3Rpb24gKCkge1xuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpXG4gIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAsIDEuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAxLjBdKTtcbiAgICBjYXNlIDE6XG4gICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbYXJndW1lbnRzWzBdLCAgICAgICAgICAwLjAsICAgICAgICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMCwgYXJndW1lbnRzWzBdLCAgICAgICAgICAwLjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAsICAgICAgICAgIDAuMCwgYXJndW1lbnRzWzBdXSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3dpdGNoIChhcmd1bWVudHNbMF0ubGVuZ3RoKSB7XG4gICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoYXJndW1lbnRzWzBdKTsgICAgICAgIFxuICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbYXJndW1lbnRzWzBdWzBdLCBhcmd1bWVudHNbMF1bMV0sIGFyZ3VtZW50c1swXVsgMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzBdWzRdLCBhcmd1bWVudHNbMF1bNV0sIGFyZ3VtZW50c1swXVsgNl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzBdWzhdLCBhcmd1bWVudHNbMF1bOV0sIGFyZ3VtZW50c1swXVsxMF1dKTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYXQzOiBpbnZhbGlkIGFycmF5IHNpemUnKTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgICB9XG4gICAgY2FzZSA5OlxuICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW2FyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1szXSwgYXJndW1lbnRzWzRdLCBhcmd1bWVudHNbNV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzZdLCBhcmd1bWVudHNbN10sIGFyZ3VtZW50c1s4XV0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3ZlYzI6IGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cycpO1xuICB9XG59XG5cbnJnbS5tYXQ0ID0gZnVuY3Rpb24gKCkge1xuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpXG4gIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbMS4wLCAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMCwgMS4wLCAwLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMS4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMS4wXSk7XG4gICAgY2FzZSAxOlxuICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW2FyZ3VtZW50c1swXSwgICAgICAgICAgMC4wLCAgICAgICAgICAwLjAsICAgICAgICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMCwgYXJndW1lbnRzWzBdLCAgICAgICAgICAwLjAsICAgICAgICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMCwgICAgICAgICAgMC4wLCBhcmd1bWVudHNbMF0sICAgICAgICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMCwgICAgICAgICAgMC4wLCAgICAgICAgICAwLjAsIGFyZ3VtZW50c1swXV0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN3aXRjaCAoYXJndW1lbnRzWzBdLmxlbmd0aCkge1xuICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFthcmd1bWVudHNbMF1bMF0sIGFyZ3VtZW50c1swXVsxXSwgYXJndW1lbnRzWzBdWzJdLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzBdWzNdLCBhcmd1bWVudHNbMF1bNF0sIGFyZ3VtZW50c1swXVs1XSwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1swXVs2XSwgYXJndW1lbnRzWzBdWzddLCBhcmd1bWVudHNbMF1bOF0sIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAsICAgICAgICAgICAgIDAuMCwgICAgICAgICAgICAgMC4wLCAxLjBdKTtcbiAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoYXJndW1lbnRzWzBdKTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYXQzOiBpbnZhbGlkIGFycmF5IHNpemUnKTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgICB9XG4gICAgY2FzZSAxNjpcbiAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFthcmd1bWVudHNbIDBdLCBhcmd1bWVudHNbIDFdLCBhcmd1bWVudHNbIDJdLCBhcmd1bWVudHNbIDNdLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbIDRdLCBhcmd1bWVudHNbIDVdLCBhcmd1bWVudHNbIDZdLCBhcmd1bWVudHNbIDddLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbIDhdLCBhcmd1bWVudHNbIDldLCBhcmd1bWVudHNbMTBdLCBhcmd1bWVudHNbMTFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50c1sxMl0sIGFyZ3VtZW50c1sxM10sIGFyZ3VtZW50c1sxNF0sIGFyZ3VtZW50c1sxNV1dKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCd2ZWMyOiBpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHMnKTtcbiAgfVxufVxuXG5yZ20ucXVhdCA9IGZ1bmN0aW9uICgpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKVxuICB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIHJnbS52ZWM0KDAsIDAsIDAsIDEpO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiByZ20udmVjNChhcmd1bWVudHNbMF0pOyAgICAgXG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIHJnbS52ZWM0KFthcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM11dKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCd2ZWMyOiBpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHMnKTtcbiAgfVxufVxuIiwiXG5yZ20uYWRkID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgaWYgKGEubGVuZ3RoICE9IGIubGVuZ3RoKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2FkZDogYSBhbmQgYiBtdXN0IGJlIHRoZSBzYW1lIGRpbWVuc2lvbicpO1xuICB9XG4gIFxuICB2YXIgciA9IG5ldyBGbG9hdDMyQXJyYXkoYS5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICByW2ldID0gYVtpXSArIGJbaV07XG4gIH1cbiAgXG4gIHJldHVybiByO1xufVxuXG5yZ20uc3ViID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgaWYgKGEubGVuZ3RoICE9IGIubGVuZ3RoKSB7XG4gICAgdGhyb3cgRXJyb3IoJ3N1YjogYSBhbmQgYiBtdXN0IGJlIHRoZSBzYW1lIGRpbWVuc2lvbicpO1xuICB9XG4gIFxuICB2YXIgciA9IG5ldyBGbG9hdDMyQXJyYXkoYS5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICByW2ldID0gYVtpXSAtIGJbaV07XG4gIH1cbiAgXG4gIHJldHVybiByO1xufVxuXG5yZ20ubmVnID0gZnVuY3Rpb24gKGEpIHtcbiAgdmFyIHIgPSBuZXcgRmxvYXQzMkFycmF5KGEubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgcltpXSA9IC1hW2ldO1xuICB9XG4gIFxuICByZXR1cm4gcjtcbn1cblxucmdtLmRvdCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHZhciB2ID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgdiArPSBhW2ldICogYltpXTtcbiAgfVxuICByZXR1cm4gdjtcbn1cblxucmdtLmNyb3NzID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgaWYgKGEubGVuZ3RoICE9IDMgfHxcbiAgICAgIGIubGVuZ3RoICE9IDMpIHtcbiAgICB0aHJvdyBFcnJvcignY3Jvc3M6IGEgYW5kIGIgbXVzdCBiZSAzRCcpO1xuICB9XG4gIFxuICB2YXIgciA9IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG4gIFxuICByWzBdID0gKGFbMV0gKiBiWzJdKSAtIChhWzJdICogYlsxXSk7XG4gIHJbMV0gPSAoYVsyXSAqIGJbMF0pIC0gKGFbMF0gKiBiWzJdKTtcbiAgclsyXSA9IChhWzBdICogYlsxXSkgLSAoYVsxXSAqIGJbMF0pO1xuICBcbiAgcmV0dXJuIHI7XG59XG5cbnJnbS52bXVsdCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIGlmIChhLmxlbmd0aCAhPSBiLmxlbmd0aCkge1xuICAgIHRocm93IEVycm9yKCd2bXVsdDogYSBhbmQgYiBtdXN0IGJlIHRoZSBzYW1lIGRpbWVuc2lvbicpO1xuICB9XG4gIFxuICB2YXIgciA9IG5ldyBGbG9hdDMyQXJyYXkoYS5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICByW2ldID0gYVtpXSAqIGJbaV07XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbnJnbS52c211bHQgPSBmdW5jdGlvbiAodiwgcykge1xuICB2YXIgciA9IG5ldyBGbG9hdDMyQXJyYXkodi5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICByW2ldID0gdltpXSAqIHM7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbnJnbS5sZW5ndGggPSBmdW5jdGlvbiAodikgeyAgXG4gIHJldHVybiBNYXRoLnNxcnQocmdtLmRvdCh2LCB2KSk7XG59XG5cbnJnbS5ub3JtYWxpemUgPSBmdW5jdGlvbiAodikge1xuICByZXR1cm4gcmdtLnZzbXVsdCh2LCAxLjAgLyByZ20ubGVuZ3RoKHYpKTtcbn1cblxucmdtLm1tdWx0ID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgaWYgKGEubGVuZ3RoICE9IGIubGVuZ3RoKSB7XG4gICAgdGhyb3cgRXJyb3IoJ21tdWx0OiBhIGFuZCBiIG11c3QgYmUgdGhlIHNhbWUgZGltZW5zaW9uJyk7XG4gIH1cbiAgXG4gIHZhciBuID0gTWF0aC5zcXJ0KGEubGVuZ3RoKTtcbiAgdmFyIHIgPSBuZXcgRmxvYXQzMkFycmF5KGEubGVuZ3RoKTtcbiAgXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgIHZhciB2ID0gMDtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgIHYgPSB2ICsgYVtpKm4ra10gKiBiW2sqbitqXTtcbiAgICAgIH1cbiAgICAgIHJbaSpuK2pdID0gdjtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiByO1xufVxuXG5yZ20udHJhbnNwb3NlID0gZnVuY3Rpb24obSkgeyAgICBcbiAgdmFyIG4gPSBNYXRoLnNxcnQobS5sZW5ndGgpO1xuICB2YXIgciA9IG5ldyBGbG9hdDMyQXJyYXkobS5sZW5ndGgpO1xuICBcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgcltqKm4raV0gPSBtW2kqbitqXTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiByO1xufVxuXG5yZ20ubXZtdWx0ID0gZnVuY3Rpb24gKG0sIHYpIHtcblx0dmFyIG4gPSB2Lmxlbmd0aDtcblx0dmFyIHIgPSBuZXcgRmxvYXQzMkFycmF5KG4pO1xuXHRcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspXG5cdHtcblx0XHRyW2ldID0gMDtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG47IGorKylcblx0XHR7XG5cdFx0XHRcdHJbaV0gKz0gbVtqKm4raV0gKiB2W2pdO1xuXHRcdH1cblx0fVxuXHRcblx0cmV0dXJuIHI7XG59XG5cbnJnbS5xbXVsdCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHZhciB3YSA9IGFbM107XG4gIHZhciB2YSA9IHJnbS52ZWMzKGFbMF0sIGFbMV0sIGFbMl0pO1xuICB2YXIgd2IgPSBiWzNdO1xuICB2YXIgdmIgPSByZ20udmVjMyhiWzBdLCBiWzFdLCBiWzJdKTtcbiAgXG4gIHZhciB3ID0gd2EgKiB3YiAtIHJnbS5kb3QodmEsIHZiKTtcbiAgdmFyIHYgPSByZ20uYWRkKHJnbS5hZGQocmdtLnZzbXVsdCh2Yiwgd2EpLCByZ20udnNtdWx0KHZhLCB3YikpLCByZ20uY3Jvc3ModmEsIHZiKSk7XG5cbiAgcmV0dXJuIHJnbS5xdWF0KHZbMF0sIHZbMV0sIHZhWzJdLCB3KTtcbn1cblxucmdtLnFjb25qdWdhdGUgPSBmdW5jdGlvbiAocSkge1xuICByZXR1cm4gcmdtLnF1YXQoLXFbMF0sIC1xWzFdLCAtcVsyXSwgcVszXSk7XG59XG5cbnJnbS5xdWF0Mm1hdDQgPSBmdW5jdGlvbiAocSkge1xuICB2YXIgeHggPSBxWzBdICogcVswXTtcbiAgdmFyIHh5ID0gcVswXSAqIHFbMV07XG4gIHZhciB4eiA9IHFbMF0gKiBxWzJdO1xuICB2YXIgeHcgPSBxWzBdICogcVszXTtcbiAgdmFyIHl5ID0gcVsxXSAqIHFbMV07XG4gIHZhciB5eiA9IHFbMV0gKiBxWzJdO1xuICB2YXIgeXcgPSBxWzFdICogcVszXTtcbiAgdmFyIHp6ID0gcVsyXSAqIHFbMl07XG4gIHZhciB6dyA9IHFbMl0gKiBxWzNdO1xuICBcbiAgdmFyIG1hdCA9IHJnbS5tYXQ0KDEpO1xuICBtYXRbMF0gID0gMSAtIDIgKiAoeXkgKyB6eik7XG4gIG1hdFs0XSAgPSAgICAgMiAqICh4eSAtIHp3KTtcbiAgbWF0WzhdICA9ICAgICAyICogKHh6ICsgeXcpO1xuICBtYXRbMV0gID0gICAgIDIgKiAoeHkgKyB6dyk7XG4gIG1hdFs1XSAgPSAxIC0gMiAqICh4eCArIHp6KTtcbiAgbWF0WzldICA9ICAgICAyICogKHl6IC0geHcpO1xuICBtYXRbMl0gID0gICAgIDIgKiAoeHogLSB5dyk7XG4gIG1hdFs2XSAgPSAgICAgMiAqICh5eiArIHh3KTtcbiAgbWF0WzEwXSA9IDEgLSAyICogKHh4ICsgeXkpO1xuICBtYXRbM10gID0gbWF0WzddID0gbWF0WzExXSA9IG1hdFsxMl0gPSBtYXRbMTNdID0gbWF0WzE0XSA9IDA7XG4gIG1hdFsxNV0gPSAxO1xuICBcbiAgcmV0dXJuIG1hdDtcbn1cblxucmdtLmVxdWFsID0gZnVuY3Rpb24gKGEsIGIsIGVwcykge1xuICBpZiAoYS5sZW5ndGggIT0gYi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIHZhciBlID0gKGVwcyAhPT0gdW5kZWZpbmVkKSA/IGVwcyA6IDFlLTY7XG4gIFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoTWF0aC5hYnMoYVtpXSAtIGJbaV0pID4gZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBcbiAgcmV0dXJuIHRydWU7XG59IiwiXG5cbnJnbS5yYWRpYW5zID0gZnVuY3Rpb24oZGVncmVlcykge1xuICByZXR1cm4gZGVncmVlcyAqIChNYXRoLlBJIC8gMTgwLjApO1xufTtcblxucmdtLmRlZ3JlZXMgPSBmdW5jdGlvbihyYWRpYW5zKSB7XG4gIHJldHVybiByYWRpYW5zICogKDE4MC4wIC8gTWF0aC5QSSk7XG59OyBcblxuXG5yZ20ub3J0aG8gPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcbiAgdmFyIHJsID0gKHJpZ2h0IC0gbGVmdCk7XG4gIHZhciB0YiA9ICh0b3AgLSBib3R0b20pO1xuICB2YXIgZm4gPSAoZmFyIC0gbmVhcik7XG4gIFxuICB2YXIgbSA9IHJnbS5tYXQ0KCk7ICBcbiAgXG4gIG1bMF0gPSAyIC8gcmw7XG4gIG1bMV0gPSAwO1xuICBtWzJdID0gMDtcbiAgbVszXSA9IDA7XG4gIG1bNF0gPSAwO1xuICBtWzVdID0gMiAvIHRiO1xuICBtWzZdID0gMDtcbiAgbVs3XSA9IDA7XG4gIG1bOF0gPSAwO1xuICBtWzldID0gMDtcbiAgbVsxMF0gPSAtMiAvIGZuO1xuICBtWzExXSA9IDA7XG4gIG1bMTJdID0gLShsZWZ0ICsgcmlnaHQpIC8gcmw7XG4gIG1bMTNdID0gLSh0b3AgKyBib3R0b20pIC8gdGI7XG4gIG1bMTRdID0gLShmYXIgKyBuZWFyKSAvIGZuO1xuICBtWzE1XSA9IDE7XG5cbiAgcmV0dXJuIG07XG59XG5cbnJnbS5mcnVzdHVtID0gZnVuY3Rpb24gKGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgem5lYXIsIHpmYXIpIHtcbiAgdmFyIHQxID0gMiAqIHpuZWFyO1xuICB2YXIgdDIgPSByaWdodCAtIGxlZnQ7XG4gIHZhciB0MyA9IHRvcCAtIGJvdHRvbTtcbiAgdmFyIHQ0ID0gemZhciAtIHpuZWFyO1xuXG4gIHZhciBtID0gbmV3IEZsb2F0MzJBcnJheSgxNik7XG4gIFxuICBtWzBdID0gdDEvdDI7IG1bNF0gPSAgICAgMDsgbVsgOF0gPSAgKHJpZ2h0ICsgbGVmdCkgLyB0MjsgbVsxMl0gPSAgICAgICAgICAgICAgICAgMDtcbiAgbVsxXSA9ICAgICAwOyBtWzVdID0gdDEvdDM7IG1bIDldID0gICh0b3AgKyBib3R0b20pIC8gdDM7IG1bMTNdID0gICAgICAgICAgICAgICAgIDA7XG4gIG1bMl0gPSAgICAgMDsgbVs2XSA9ICAgICAwOyBtWzEwXSA9ICgtemZhciAtIHpuZWFyKSAvIHQ0OyBtWzE0XSA9ICgtdDEgKiB6ZmFyKSAvIHQ0O1xuICBtWzNdID0gICAgIDA7IG1bN10gPSAgICAgMDsgbVsxMV0gPSAgICAgICAgICAgICAgICAgICAtMTsgbVsxNV0gPSAgICAgICAgICAgICAgICAgMDtcbiAgXG4gIHJldHVybiBtO1xufVxuXG5yZ20ucGVyc3BlY3RpdmUgPSBmdW5jdGlvbiAoZm92eSwgYXNwZWN0LCB6bmVhciwgemZhcikge1xuICB2YXIgeW1heCA9IHpuZWFyICogTWF0aC50YW4ocmdtLnJhZGlhbnMoZm92eSkpO1xuICB2YXIgeG1heCA9IHltYXggKiBhc3BlY3Q7XG4gIHJldHVybiByZ20uZnJ1c3R1bSgteG1heCwgeG1heCwgLXltYXgsIHltYXgsIHpuZWFyLCB6ZmFyKTtcbn1cblxuLy8gTk9URTogdGhpcyBpcyBpbmVmZmljaWVudCwgaXQgbWF5IGJlIHNlbnNpYmxlIHRvIHByb3ZpZGUgaW5wbGFjZSB2ZXJzaW9uc1xucmdtLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKG0sIHgsIHksIHopIHsgICAgXG4gIHZhciByID0gcmdtLm1hdDQobSk7XG4gIHJbMTJdID0gbVswXSAqIHggKyBtWzRdICogeSArIG1bIDhdICogeiArIG1bMTJdO1xuICByWzEzXSA9IG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWyA5XSAqIHogKyBtWzEzXTtcbiAgclsxNF0gPSBtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6ICsgbVsxNF07XG4gIHJbMTVdID0gbVszXSAqIHggKyBtWzddICogeSArIG1bMTFdICogeiArIG1bMTVdO1xuICByZXR1cm4gcjtcbn1cblxucmdtLnJvdGF0ZSA9IGZ1bmN0aW9uIChtLCBhbmdsZSwgeCwgeSwgeikgeyAgXG4gIHZhciBhID0gcmdtLnJhZGlhbnMoYW5nbGUpO1xuICB2YXIgYyA9IE1hdGguY29zKGEpO1xuICB2YXIgcyA9IE1hdGguc2luKGEpO1xuICBcbiAgdmFyIGwgPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcbiAgdmFyIG54ID0geCAvIGw7XG4gIHZhciBueSA9IHkgLyBsO1xuICB2YXIgbnogPSB6IC8gbDtcblxuICB2YXIgdDAgPSBueCAqICgxIC0gYyk7XG4gIHZhciB0MSA9IG55ICogKDEgLSBjKTtcbiAgdmFyIHQyID0gbnogKiAoMSAtIGMpOyAgXG5cbiAgdmFyIGQgPSByZ20ubWF0NCgxKTtcbiAgXG4gIGRbIDBdID0gYyArIHQwICogbng7XG4gIGRbIDFdID0gMCArIHQwICogbnkgKyBzICogbno7XG4gIGRbIDJdID0gMCArIHQwICogbnogLSBzICogbnk7XG5cbiAgZFsgNF0gPSAwICsgdDEgKiBueCAtIHMgKiBuejtcbiAgZFsgNV0gPSBjICsgdDEgKiBueTtcbiAgZFsgNl0gPSAwICsgdDEgKiBueiArIHMgKiBueDtcblxuICBkWyA4XSA9IDAgKyB0MiAqIG54ICsgcyAqIG55O1xuICBkWyA5XSA9IDAgKyB0MiAqIG55IC0gcyAqIG54O1xuICBkWzEwXSA9IGMgKyB0MiAqIG56OyAgXG4gIFxuICB2YXIgciA9IHJnbS5tbXVsdChtLCBkKTtcbiAgXG4gIHJbMTJdID0gbVsxMl07XG4gIHJbMTNdID0gbVsxM107XG4gIHJbMTRdID0gbVsxNF07XG4gIHJbMTVdID0gbVsxNV07XG4gIFxuICByZXR1cm4gcjtcbn1cblxucmdtLnNjYWxlID0gZnVuY3Rpb24obSwgeCwgeSwgeikgeyAgICBcbiAgdmFyIHIgPSByZ20ubWF0NCgxKTtcbiAgXG4gIHJbIDBdID0gbVsgMF0gKiB4OyBcbiAgclsgMV0gPSBtWyAxXSAqIHg7IFxuICByWyAyXSA9IG1bIDJdICogeDsgXG4gIHJbIDNdID0gbVsgM10gKiB4OyBcbiAgXG4gIHJbIDRdID0gbVsgNF0gKiB5OyBcbiAgclsgNV0gPSBtWyA1XSAqIHk7IFxuICByWyA2XSA9IG1bIDZdICogeTsgXG4gIHJbIDddID0gbVsgN10gKiB5OyBcbiAgXG4gIHJbIDhdID0gbVsgOF0gKiB6O1xuICByWyA5XSA9IG1bIDldICogejtcbiAgclsxMF0gPSBtWzEwXSAqIHo7XG4gIHJbMTFdID0gbVsxMV0gKiB6O1xuICBcbiAgclsxMl0gPSBtWzEyXTtcbiAgclsxM10gPSBtWzEzXTtcbiAgclsxNF0gPSBtWzE0XTtcbiAgclsxNV0gPSBtWzE1XTtcbiAgXG4gIHJldHVybiByO1xufVxuXG5yZ20ucXJvdGF0ZSA9IGZ1bmN0aW9uIChhbmdsZSwgYXhpcykge1xuICB2YXIgYW4gICAgPSByZ20ubm9ybWFsaXplKGF4aXMpO1xuICB2YXIgc2luX2EgPSBNYXRoLnNpbihyZ20ucmFkaWFucyhhbmdsZS8yLjApKTtcbiAgdmFyIGNvc19hID0gTWF0aC5jb3MocmdtLnJhZGlhbnMoYW5nbGUvMi4wKSk7XG4gIHZhciB4ID0gYW5bMF0gKiBzaW5fYTtcbiAgdmFyIHkgPSBhblsxXSAqIHNpbl9hO1xuICB2YXIgeiA9IGFuWzJdICogc2luX2E7XG4gIHZhciB3ID0gY29zX2E7XG4gIHJldHVybiByZ20ucXVhdCh4LCB5LCB6LCB3KTtcbn1cblxucmdtLnF0cmFuc2Zvcm0gPSBmdW5jdGlvbiAocSwgdikge1xuICB2YXIgcW4gPSByZ20ubm9ybWFsaXplKHEpICBcbiAgdmFyIHF2ID0gcmdtLnF1YXQodlswXSwgdlsxXSwgdlsyXSwgMCk7XG4gIHZhciBxYyA9IHJnbS5xY29uanVnYXRlKHFuKTtcbiAgXG4gIHZhciBxciA9IHJnbS5xbXVsdChyZ20ucW11bHQocW4sIHF2KSwgcWMpO1xuICBcbiAgcmV0dXJuIHJnbS52ZWMzKHFyWzBdLCBxclsxXSwgcXJbMl0pO1xufVxuIl19
