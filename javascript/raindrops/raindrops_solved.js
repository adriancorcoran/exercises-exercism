//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (val) => {
  let returnString = "";
  if (val % 3 == 0) {
    returnString += "Pling";
  }
  if (val % 5 == 0) {
    returnString += "Plang";
  }
  if (val % 7 == 0) {
    returnString += "Plong";
  }
  if (returnString.length === 0) {
    returnString = val.toString();
  }
  return returnString;
};
