//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = letterString => {
  const letterMap = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  };

  return letterString != ""
    ? letterString
        .split("")
        .map(letter => letterMap[letter])
        .join("")
    : "";
};
