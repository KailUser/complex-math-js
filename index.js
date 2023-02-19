console.log("Starting to work 🚀");
class Complex {
    constructor(real, imag) {
      this.real = real;
      this.imag = imag;
    }
  
    add(other) {
      return new Complex(this.real + other.real, this.imag + other.imag);
    }
  
    subtract(other) {
      return new Complex(this.real - other.real, this.imag - other.imag);
    }
  
    multiply(other) {
      const real = this.real * other.real - this.imag * other.imag;
      const imag = this.real * other.imag + this.imag * other.real;
      return new Complex(real, imag);
    }
  
    divide(other) {
      const real = (this.real * other.real + this.imag * other.imag) / (other.real ** 2 + other.imag ** 2);
      const imag = (this.imag * other.real - this.real * other.imag) / (other.real ** 2 + other.imag ** 2);
      return new Complex(real, imag);
    }
  
    magnitude() {
      return Math.sqrt(this.real ** 2 + this.imag ** 2);
    }
  
    conjugate() {
      return new Complex(this.real, -this.imag);
    }
  
    toString() {
      return `${this.real} + ${this.imag}i`;
    }
  }
  
  function addComplexNumbers(a, b) {
    return a.add(b);
  }
  
  function subtractComplexNumbers(a, b) {
    return a.subtract(b);
  }
  
  function multiplyComplexNumbers(a, b) {
    return a.multiply(b);
  }
  
  function divideComplexNumbers(a, b) {
    return a.divide(b);
  }
  
  module.exports = {
    Complex: Complex,
    addComplexNumbers: addComplexNumbers,
    subtractComplexNumbers: subtractComplexNumbers,
    multiplyComplexNumbers: multiplyComplexNumbers,
    divideComplexNumbers: divideComplexNumbers
  };
  