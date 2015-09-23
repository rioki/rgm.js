
Rioki's Game Math - Web Edition
===============================

[![wercker status](https://app.wercker.com/status/ebe34fd193c258e0337cf2db36b07897/m/master "wercker status")](https://app.wercker.com/project/bykey/ebe34fd193c258e0337cf2db36b07897)

rgm.js is a small library written in JavaScript that implements the subset of
linear algebra used for computer graphics and games.

rgm.js includes:

* 2, 3 and 4 dimensional vectors
* 3x3 and 4x4 matrices
* quaternions
* transformation and projection matrices

Documentation
-------------

### Constructors

All "objects" in rgm.js are of type Float32Array. For convenience and semantics 
rgm.js provides constructors for the types. These are the following:

* rgm.vec2
* rgm.vec3
* rgm.vec4
* rgm.mat3
* rgm.mat4
* rgm.quat

These constructors can be called without argument, this will create a neutral 
object. In the case of vectors, this is a origin vector. In the case of 
matrices, this is the identity matrix. In the case of a quaternion it is a 
uniform unit quaternion. 

    rgm.vec3() -> [0, 0, 0] 
    
    rgm.mat3() -> [1, 0, 0,
                   0, 1, 0,
                   0, 0, 1]
                   
    rgm.quat() -> [0, 0, 0, 1]
    
The vector and matrix constructors can be called with one argument. That value
defines the magnitude of the element.

    rgm.vec3(2.5) -> [2.5, 2.5, 2.5] 
    
    rgm.mat3(2.5) -> [2.5,   0,   0,
                        0, 2.5,   0,
                        0,   0, 2.5]

The constructors can also be called with initial values either directly or 
with an array of elements. 

    rgm.vec3(1, 2, 3)   -> [1, 2, 3]
    
    rgm.vec3([1, 2, 3]) -> [1, 2, 3]
    
    rgm.mat3(1, 2, 3, 4, 5, 6, 7, 8, 9) -> [1, 2, 3,
                                            4, 5, 6, 
                                            7, 8, 9]
    
Vectors and matrices can be converted from lower to higher and higher to lower
dimensions. 

    var v2 = rgm.vec2(1, 2);
    var v4 = rgm.vec4(1, 2, 3, 4);
    
    rgm.vec3(v2) -> [1, 2, 0]
    rgm.vec3(v4) -> [1, 2, 3]
    
Please note that all transformation and projection functions assume that the 
matrices are column major; like with OpenGL.

    rgm.mat3(1, 2, 3,        |1 4 7|
             4, 5, 6,   ->   |2 5 8|
             7, 8, 9)        |3 6 9|
             
This is slightly confusing, but consistent with almost all other OpenGL handling
code.
    
### General Functions

The following functions are defined for all object types:

    rgm.add(a, b)
    
The function add implements element wise addition.

    rgm.sub(a, b)

The function sub implements element wise subtraction.
    
    rgm.neg(a)
    
The function neg implements element wise negation. 

### Vector Functions

The following functions are defined for vector types:

    rgm.dot(a, b)
    
The function dot implements element the dot product of two vectors.

    rgm.cross(a, b)
    
The function cross implements the cross product for R3 vectors.

    rgm.vmult(a, b)
    
The function vmult implements element wise multiplication.

    rgm.vsmulst(v, s)
    
The function vsmult implements vector scalar multiplication.

    rgm.length(v)

The length function computes the length of the vector.
    
    rgm.normalize(v)
    
The normalize function returns a normalized vector. 

### Matrix Function

The following functions are defined for matrix types:

    rgm.mmult(a, b)

The function mmult implements matrix multiplication. 

    rgm.mvmult(m, v)

The function mvmult implements matrix vector multiplication. 

    rgm.transpose(m)
    
The function transpose transposes a matrix.
    
### Quaternion Functions

Please note that a quaternion is a R4 vector and thus all vectors functions
apply to quaternions.

The following functions are defined for quaternions:

    rgm.qmult(a, b)
    
The function qmult implements quaternion multiplication.

    rgm.quat2mat4(q)
    
The function quat2mat4 converts a quaternion to a rotation matrix.

### Transformation & Projection

    rgm.ortho(left, right, bottom, top, near, far)
    
The ortho function creates a orthographic projection matrix.

    rgm.frustum(left, right, bottom, top, znear, zfar)
    
The frustum function create a perspective projection matrix.

    rgm.perspective(fovy, aspect, znear, zfar)
    
The perspective function is a convenience wrapper around frustum. 

    rgm.translate(m, x, y, z)
    
The translate function takes an existing transformation matrix and adds a 
translation to the matrix. 

    rgm.rotate(m, angle x, y, z)
    
The rotate function takes an existing transformation matrix and adds a 
rotation to the matrix.

    rgm.scale(m, x, y, z)
    
    
The rotate function takes an existing transformation matrix and adds a 
scale to the matrix.    

    rgm.qrotate(angle, axis)
    
The qrotate function create a rotation quaternion from an axis and angle. 

### Utility Functions

    rgm.radians(degrees)
    
The function radians converts degrees into radians. 

    rgm.degrees(radians)
    
The function degrees converts radians into degrees. 

License
-------

The MIT License (MIT)

Copyright (c) 2015 Sean Farrell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
