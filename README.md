# Complex Math JS

![npm](https://img.shields.io/npm/v/complex-math-js?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/complex-math-js?style=flat-square)
![NPM](https://img.shields.io/npm/l/complex-math-js?style=flat-square)
[![](https://data.jsdelivr.com/v1/package/npm/complex-math-js/badge)](https://www.jsdelivr.com/package/npm/complex-math-js)
[![Documentation Status](https://readthedocs.org/projects/complex-math-js/badge/?version=latest)](https://complex-math-js.readthedocs.io/en/latest/?badge=latest)

A lightweight JavaScript library for complex number arithmetic.

## Installation

You can install `complex-math-js` using npm:

```npm
    npm install complex-math-js
```

## Usage

```js
const { Complex, addComplexNumbers, subtractComplexNumbers, multiplyComplexNumbers, divideComplexNumbers } = require('complex-math-js');

const a = new Complex(1, 2);
const b = new Complex(3, 4);

console.log(a.add(b));          // Output: 4 + 6i
console.log(a.subtract(b));     // Output: -2 - 2i
console.log(a.multiply(b));     // Output: -5 + 10i
console.log(a.divide(b));       // Output: 0.44 + 0.08i
console.log(a.magnitude());     // Output: 2.23606797749979
console.log(a.conjugate());     // Output: 1 - 2i
```

### On site
```html
<script type="module"> 
    import complex-math-js from https://cdn.jsdelivr.net/npm/complex-math-js/+esm 
</script>
```
## API
Complex

A class representing a complex number.

## Constructor: 

`new Complex(real, imag)`: Creates a new complex number object with the given real and imaginary components.

## Methods:
`add(other)`: Returns a new Complex object that is the sum of this complex number and the other complex number.

`subtract(other)`: Returns a new Complex object that is the difference between this complex number and the other complex number.

`multiply(other)`: Returns a new Complex object that is the product of this complex number and the other complex number.

`divide(other)`: Returns a new Complex object that is the quotient of this complex number and the other complex number.

`magnitude()`: Returns the magnitude (absolute value) of this complex number.

`conjugate()`: Returns a new Complex object that is the complex conjugate of this complex number.

`toString()`: Returns a string representation of this complex number.

## Functions
 `addComplexNumbers(a, b)`: Returns the sum of the a and b complex numbers.
 
 `subtractComplexNumbers(a, b)`: Returns the difference between the a and b complex numbers.
 
 `multiplyComplexNumbers(a, b)`: Returns the product of the a and b complex numbers.
 
 `divideComplexNumbers(a, b)`: Returns the quotient of the a and b complex numbers.
 
## License

![NPM](https://img.shields.io/npm/l/complex-math-js?style=flat-square)
