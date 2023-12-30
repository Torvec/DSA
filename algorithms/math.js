//! Fibonacci Sequence
//! ===============================================================================================
function fibSeq(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// * Big-O = O(n) - due to the for loop

//! Factorial of a Number
//! ===============================================================================================
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

// * Big-O = O(n) - due to the for loop

//!Is Prime number
//! ===============================================================================================
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// * Big-O = O(n) due to the for loop

//!Power of Two
//! ===============================================================================================
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

// * Big-O = O(logn) because the input is halved in the while loop

//! Power of Two Bitwise Ver.
//! ===============================================================================================
function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

// * Big-O is O(1) or constant due to bitwise operator

//! Recursive Fibonacci Sequence
//! ===============================================================================================
function recursiveFibSeq(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibSeq(n - 1) + recursiveFibSeq(n - 2);
}

// * Big-O is O(2^n)

//! Recursive Factorial
//! ===============================================================================================
function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

// * Big-O is O(n)
