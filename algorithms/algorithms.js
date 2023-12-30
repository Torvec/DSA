//! Cartesian Product
//! ===============================================================================================
function cartesianProduct(arrA, arrB) {
  const resultArr = [];
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      resultArr.push([arrA[i], arrB[j]]);
    }
  }
  return resultArr;
}

// * Big-O = O(mn)

//! Climbing Staircase
//! ===============================================================================================
function climbingStaircase(n) {
  const numberOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2];
  }
  return numberOfWays[n - 1];
}

// * Big-O = O(n)

//! Tower of Hanoi
//! ===============================================================================================
function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disc 1 from ${fromRod} to ${toRod}.`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disc ${n} from ${fromRod} to ${toRod}.`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "B", "C");

// * Big-O = O(2^n)