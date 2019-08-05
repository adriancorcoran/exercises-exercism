//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = sentence => {
  // check sentence
  if (sentence === "") return false;
  // create letters array
  const lettersArray = "abcdefghijklmnopqrstuvwxyz".split("");
  // set return to true unless one letter is not found
  let returnValue = true;
  // loop through letters array
  lettersArray.forEach(letter => {
    if (sentence.toLowerCase().indexOf(letter) < 0) {
      returnValue = false;
    }
  });
  // return
  return returnValue;
};
