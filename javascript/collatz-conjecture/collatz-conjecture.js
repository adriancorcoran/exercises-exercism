//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = num => {
  // check if less than 1
  if (num < 1) {
    throw new Error("Only positive numbers are allowed");
  } else if (num === 1) {
    return 0;
  } else {
    // count the steps
    let steps = 0;
    // loop and divide until we get to 1
    do {
      // check if even
      if (num % 2 === 0) {
        num = num / 2;
      }
      // else odd
      else {
        num = num * 3 + 1;
      }
      // increase steps
      steps++;
    } while (num !== 1);
    // return the steps
    return steps;
  }
};
