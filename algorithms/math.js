//! Fibonacci Sequence
//! ===============================================================================================
// * Big-O = O(n) - due to the for loop

function fibSeq(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}


//! Factorial of a Number
//! ===============================================================================================
// * Big-O = O(n) - due to the for loop

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}


//!Is Prime number
//! ===============================================================================================
// * Big-O = O(n) due to the for loop

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


//!Power of Two
//! ===============================================================================================
// * Big-O = O(logn) because the input is halved in the while loop

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


//! Power of Two Bitwise Ver.
//! ===============================================================================================
// * Big-O is O(1) or constant due to bitwise operator

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}


//! Recursive Fibonacci Sequence
//! ===============================================================================================
// * Big-O is O(2^n)

function recursiveFibSeq(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibSeq(n - 1) + recursiveFibSeq(n - 2);
}


//! Recursive Factorial
//! ===============================================================================================
// * Big-O is O(n)

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

