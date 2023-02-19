=======================================
Complex Math JS Library Documentation
=======================================

Introduction
------------

The Complex Math JS Library is a JavaScript library for performing mathematical operations on complex numbers. It provides a `Complex` class with methods for adding, subtracting, multiplying, dividing, calculating magnitude, and finding the conjugate of complex numbers. The library also includes utility functions for performing these operations on pairs of complex numbers.

Installation
------------

To use the Complex Math JS Library in your project, you can install it from NPM:

.. code-block:: shell

   npm install complex-math-js

Usage
-----

To use the `Complex` class and utility functions in your JavaScript code, import them as follows:

.. code-block:: javascript

   const { Complex, addComplexNumbers, subtractComplexNumbers, multiplyComplexNumbers, divideComplexNumbers } = require('complex-math-js');

You can then create instances of the `Complex` class and perform mathematical operations on them:

.. code-block:: javascript

   const a = new Complex(2, 3);
   const b = new Complex(4, 5);
   const c = a.add(b);
   console.log(c.toString());  // output: "6 + 8i"

   const d = subtractComplexNumbers(a, b);
   console.log(d.toString());  // output: "-2 - 2i"

License
-------

The Complex Math JS Library is released under the MIT License. See `LICENSE` for more information.

Contributing
------------

If you would like to contribute to the Complex Math JS Library, please see `CONTRIBUTING.md` for guidelines.

Bug Reports
-----------

If you find a bug in the Complex Math JS Library, please open an issue on GitHub.

Copyright
---------

(c) 2023 Colin(Syirezz)
