//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    // add values to array
    this.sides = [a, b, c];
    // set bad side
    this.badSide = false;
    // loop through sides and count them
    this.sidesFreq = {};
    this.sides.forEach(side => {
      // check side
      if (side <= 0) this.badSide = true;
      // set keys and count
      let key = `${side}`;
      this.sidesFreq[key] = this.sidesFreq[key] + 1 || 1;
    });
  }

  kind() {
    // check values
    if (this.badSide) {
      throw new Error("Only positive side lengths are allowed");
    }

    // check equality
    // - loop through sides
    this.sides.forEach((side, i) => {
      // - get length of this side
      let currLength = side;
      let otherLength = 0;
      // - loop through other two sides and combine their length
      this.sides.forEach((side2, j) => {
        // not current side
        if (i !== j) {
          otherLength += side2;
        }
      });
      // - check is greater than 1st side, if not throw error
      if (otherLength < currLength) {
        throw new Error("Violates triangle inequality");
      }
      // - check if equal to 1st side, if not throw error
      if (otherLength === currLength) {
        throw new Error("Degenerate triangle");
      }
    });

    // figure out which type it is
    // console.log(this.sidesFreq);
    const numKeys = Object.keys(this.sidesFreq).length;
    switch (numKeys) {
      case 1:
        return "equilateral";
      case 2:
        return "isosceles";
      default:
        return "scalene";
    }
  }
}
