//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixString) {
    const matrixRows = matrixString.split("\n");
    this.matrix = matrixRows.map(row => {
      let rowArray = row.split(" ");
      return rowArray.map(item => parseInt(item));
    });
    // count how many values in a row
    const count = this.matrix[0].length;
    this.sqMatrix = [];
    // loop through rows
    for (let i = 0; i < count; i++) {
      // loop through values
      this.sqMatrix.push(this.matrix.map(row => row[i]));
    }
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.sqMatrix;
  }
}
