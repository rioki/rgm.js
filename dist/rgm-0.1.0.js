
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
      throw new Error('vec2: invalid number of arguments');
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
      throw new Error('vec2: invalid number of arguments');
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

rgm.svmult = function (v, s) {
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
  return rgm.svmult(v, 1.0 / rgm.length(v));
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

rgm.mvmult = function (m, v) {
	var n = v.length;
	var r = new Float32Array(n);
	
	for (var i = 0; i < n; i++)
	{
		r[i] = 0;
		for (var j = 0; j < n; j++)
		{
				r[i] += m[i*n+j] * v[j];
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
  var v = rgm.add(rgm.add(rgm.svmult(vb, wa), rgm.svmult(va, wb)), rgm.cross(va, vb));

  return rgm.quat(v[0], v[1], va[2], w);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9pbml0Xy5qcyIsImNvbnN0cnVjdG9ycy5qcyIsImZ1bmN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJyZ20tMC4xLjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIHJnbSA9IHt2ZXJzaW9uOiBcIjAuMS4wXCJ9O1xyXG4iLCJcclxucmdtLnZlYzIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKVxyXG4gIHtcclxuICAgIGNhc2UgMDpcclxuICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoMik7XHJcbiAgICBjYXNlIDE6XHJcbiAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW2FyZ3VtZW50c1swXSwgYXJndW1lbnRzWzBdXSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoYXJndW1lbnRzWzBdKTtcclxuICAgICAgfVxyXG4gICAgY2FzZSAyOlxyXG4gICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV1dKTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigndmVjMjogaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzJyk7XHJcbiAgfVxyXG59XHJcblxyXG5yZ20udmVjMyA9IGZ1bmN0aW9uICgpIHtcclxuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpXHJcbiAge1xyXG4gICAgY2FzZSAwOlxyXG4gICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSgzKTtcclxuICAgIGNhc2UgMTpcclxuICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1swXV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KGFyZ3VtZW50c1swXSk7XHJcbiAgICAgIH1cclxuICAgIGNhc2UgMzpcclxuICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW2FyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl1dKTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigndmVjMjogaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzJyk7XHJcbiAgfVxyXG59XHJcblxyXG5yZ20udmVjNCA9IGZ1bmN0aW9uICgpIHtcclxuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpXHJcbiAge1xyXG4gICAgY2FzZSAwOlxyXG4gICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheSg0KTtcclxuICAgIGNhc2UgMTpcclxuICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzBdXSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoYXJndW1lbnRzWzBdKTtcclxuICAgICAgfVxyXG4gICAgY2FzZSA0OlxyXG4gICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdXSk7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3ZlYzI6IGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cycpO1xyXG4gIH1cclxufVxyXG5cclxucmdtLm1hdDMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKVxyXG4gIHtcclxuICAgIGNhc2UgMDpcclxuICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoWzEuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAsIDEuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDEuMF0pO1xyXG4gICAgY2FzZSAxOlxyXG4gICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFthcmd1bWVudHNbMF0sICAgICAgICAgIDAuMCwgICAgICAgICAgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAsIGFyZ3VtZW50c1swXSwgICAgICAgICAgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAsICAgICAgICAgIDAuMCwgYXJndW1lbnRzWzBdXSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoYXJndW1lbnRzWzBdKTtcclxuICAgICAgfVxyXG4gICAgY2FzZSA5OlxyXG4gICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbM10sIGFyZ3VtZW50c1s0XSwgYXJndW1lbnRzWzVdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzZdLCBhcmd1bWVudHNbN10sIGFyZ3VtZW50c1s4XV0pO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCd2ZWMyOiBpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHMnKTtcclxuICB9XHJcbn1cclxuXHJcbnJnbS5tYXQ0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aClcclxuICB7XHJcbiAgICBjYXNlIDA6XHJcbiAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFsxLjAsIDAuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAsIDEuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMS4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAxLjBdKTtcclxuICAgIGNhc2UgMTpcclxuICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbYXJndW1lbnRzWzBdLCAgICAgICAgICAwLjAsICAgICAgICAgIDAuMCwgICAgICAgICAgMC4wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjAsIGFyZ3VtZW50c1swXSwgICAgICAgICAgMC4wLCAgICAgICAgICAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMCwgICAgICAgICAgMC4wLCBhcmd1bWVudHNbMF0sICAgICAgICAgIDAuMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAgICAgICAwLjAsICAgICAgICAgIDAuMCwgYXJndW1lbnRzWzBdXSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoYXJndW1lbnRzWzBdKTtcclxuICAgICAgfVxyXG4gICAgY2FzZSAxNjpcclxuICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW2FyZ3VtZW50c1sgMF0sIGFyZ3VtZW50c1sgMV0sIGFyZ3VtZW50c1sgMl0sIGFyZ3VtZW50c1sgM10sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWyA0XSwgYXJndW1lbnRzWyA1XSwgYXJndW1lbnRzWyA2XSwgYXJndW1lbnRzWyA3XSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbIDhdLCBhcmd1bWVudHNbIDldLCBhcmd1bWVudHNbMTBdLCBhcmd1bWVudHNbMTFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzEyXSwgYXJndW1lbnRzWzEzXSwgYXJndW1lbnRzWzE0XSwgYXJndW1lbnRzWzE1XV0pO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCd2ZWMyOiBpbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHMnKTtcclxuICB9XHJcbn1cclxuXHJcbnJnbS5xdWF0ID0gZnVuY3Rpb24gKCkge1xyXG4gIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aClcclxuICB7XHJcbiAgICBjYXNlIDA6XHJcbiAgICAgIHJldHVybiByZ20udmVjNCgwLCAwLCAwLCAxKTtcclxuICAgIGNhc2UgMTpcclxuICAgICAgcmV0dXJuIHJnbS52ZWM0KGFyZ3VtZW50c1swXSk7ICAgICBcclxuICAgIGNhc2UgNDpcclxuICAgICAgcmV0dXJuIHJnbS52ZWM0KFthcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM11dKTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigndmVjMjogaW52YWxpZCBudW1iZXIgb2YgYXJndW1lbnRzJyk7XHJcbiAgfVxyXG59IiwiXHJcbnJnbS5hZGQgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gIGlmIChhLmxlbmd0aCAhPSBiLmxlbmd0aCkge1xyXG4gICAgdGhyb3cgRXJyb3IoJ2FkZDogYSBhbmQgYiBtdXN0IGJlIHRoZSBzYW1lIGRpbWVuc2lvbicpO1xyXG4gIH1cclxuICBcclxuICB2YXIgciA9IG5ldyBGbG9hdDMyQXJyYXkoYS5sZW5ndGgpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgcltpXSA9IGFbaV0gKyBiW2ldO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gcjtcclxufVxyXG5cclxucmdtLnN1YiA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgaWYgKGEubGVuZ3RoICE9IGIubGVuZ3RoKSB7XHJcbiAgICB0aHJvdyBFcnJvcignc3ViOiBhIGFuZCBiIG11c3QgYmUgdGhlIHNhbWUgZGltZW5zaW9uJyk7XHJcbiAgfVxyXG4gIFxyXG4gIHZhciByID0gbmV3IEZsb2F0MzJBcnJheShhLmxlbmd0aCk7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICByW2ldID0gYVtpXSAtIGJbaV07XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiByO1xyXG59XHJcblxyXG5yZ20ubmVnID0gZnVuY3Rpb24gKGEpIHtcclxuICB2YXIgciA9IG5ldyBGbG9hdDMyQXJyYXkoYS5sZW5ndGgpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgcltpXSA9IC1hW2ldO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gcjtcclxufVxyXG5cclxucmdtLmRvdCA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgdmFyIHYgPSAwO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgdiArPSBhW2ldICogYltpXTtcclxuICB9XHJcbiAgcmV0dXJuIHY7XHJcbn1cclxuXHJcbnJnbS5jcm9zcyA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgaWYgKGEubGVuZ3RoICE9IDMgfHxcclxuICAgICAgYi5sZW5ndGggIT0gMykge1xyXG4gICAgdGhyb3cgRXJyb3IoJ2Nyb3NzOiBhIGFuZCBiIG11c3QgYmUgM0QnKTtcclxuICB9XHJcbiAgXHJcbiAgdmFyIHIgPSBuZXcgRmxvYXQzMkFycmF5KDMpO1xyXG4gIFxyXG4gIHJbMF0gPSAoYVsxXSAqIGJbMl0pIC0gKGFbMl0gKiBiWzFdKTtcclxuICByWzFdID0gKGFbMl0gKiBiWzBdKSAtIChhWzBdICogYlsyXSk7XHJcbiAgclsyXSA9IChhWzBdICogYlsxXSkgLSAoYVsxXSAqIGJbMF0pO1xyXG4gIFxyXG4gIHJldHVybiByO1xyXG59XHJcblxyXG5yZ20udm11bHQgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gIGlmIChhLmxlbmd0aCAhPSBiLmxlbmd0aCkge1xyXG4gICAgdGhyb3cgRXJyb3IoJ3ZtdWx0OiBhIGFuZCBiIG11c3QgYmUgdGhlIHNhbWUgZGltZW5zaW9uJyk7XHJcbiAgfVxyXG4gIFxyXG4gIHZhciByID0gbmV3IEZsb2F0MzJBcnJheShhLmxlbmd0aCk7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICByW2ldID0gYVtpXSAqIGJbaV07XHJcbiAgfVxyXG4gIHJldHVybiByO1xyXG59XHJcblxyXG5yZ20uc3ZtdWx0ID0gZnVuY3Rpb24gKHYsIHMpIHtcclxuICB2YXIgciA9IG5ldyBGbG9hdDMyQXJyYXkodi5sZW5ndGgpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdi5sZW5ndGg7IGkrKykge1xyXG4gICAgcltpXSA9IHZbaV0gKiBzO1xyXG4gIH1cclxuICByZXR1cm4gcjtcclxufVxyXG5cclxucmdtLmxlbmd0aCA9IGZ1bmN0aW9uICh2KSB7ICBcclxuICByZXR1cm4gTWF0aC5zcXJ0KHJnbS5kb3QodiwgdikpO1xyXG59XHJcblxyXG5yZ20ubm9ybWFsaXplID0gZnVuY3Rpb24gKHYpIHtcclxuICByZXR1cm4gcmdtLnN2bXVsdCh2LCAxLjAgLyByZ20ubGVuZ3RoKHYpKTtcclxufVxyXG5cclxucmdtLm1tdWx0ID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICBpZiAoYS5sZW5ndGggIT0gYi5sZW5ndGgpIHtcclxuICAgIHRocm93IEVycm9yKCdtbXVsdDogYSBhbmQgYiBtdXN0IGJlIHRoZSBzYW1lIGRpbWVuc2lvbicpO1xyXG4gIH1cclxuICBcclxuICB2YXIgbiA9IE1hdGguc3FydChhLmxlbmd0aCk7XHJcbiAgdmFyIHIgPSBuZXcgRmxvYXQzMkFycmF5KGEubGVuZ3RoKTtcclxuICBcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykge1xyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBuOyBqKyspIHtcclxuICAgICAgdmFyIHYgPSAwO1xyXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IG47IGsrKykge1xyXG4gICAgICAgIHYgPSB2ICsgYVtpKm4ra10gKiBiW2sqbitqXTtcclxuICAgICAgfVxyXG4gICAgICByW2kqbitqXSA9IHY7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiByO1xyXG59XHJcblxyXG5yZ20ubXZtdWx0ID0gZnVuY3Rpb24gKG0sIHYpIHtcclxuXHR2YXIgbiA9IHYubGVuZ3RoO1xyXG5cdHZhciByID0gbmV3IEZsb2F0MzJBcnJheShuKTtcclxuXHRcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKylcclxuXHR7XHJcblx0XHRyW2ldID0gMDtcclxuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgbjsgaisrKVxyXG5cdFx0e1xyXG5cdFx0XHRcdHJbaV0gKz0gbVtpKm4ral0gKiB2W2pdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gcjtcclxufVxyXG5cclxucmdtLnFtdWx0ID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICB2YXIgd2EgPSBhWzNdO1xyXG4gIHZhciB2YSA9IHJnbS52ZWMzKGFbMF0sIGFbMV0sIGFbMl0pO1xyXG4gIHZhciB3YiA9IGJbM107XHJcbiAgdmFyIHZiID0gcmdtLnZlYzMoYlswXSwgYlsxXSwgYlsyXSk7XHJcbiAgXHJcbiAgdmFyIHcgPSB3YSAqIHdiIC0gcmdtLmRvdCh2YSwgdmIpO1xyXG4gIHZhciB2ID0gcmdtLmFkZChyZ20uYWRkKHJnbS5zdm11bHQodmIsIHdhKSwgcmdtLnN2bXVsdCh2YSwgd2IpKSwgcmdtLmNyb3NzKHZhLCB2YikpO1xyXG5cclxuICByZXR1cm4gcmdtLnF1YXQodlswXSwgdlsxXSwgdmFbMl0sIHcpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==