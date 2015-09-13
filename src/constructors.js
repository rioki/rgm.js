
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
