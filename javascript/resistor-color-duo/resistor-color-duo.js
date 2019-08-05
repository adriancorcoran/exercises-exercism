//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = colArray => {
  return (
    parseInt(`${COLORS.indexOf(colArray[0])}${COLORS.indexOf(colArray[1])}`) |
    false
  );
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];
