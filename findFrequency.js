// Find the frequency of word in given sentence.

let myName = "my name is mohd sami";
const findFrequence = (myName) => {
  let myMap = new Map();
  let freq = 1;
  for (let i = 0; i < myName.length; i++) {
    if (myName[i] === " ") continue;
    if (myMap.has(myName[i])) {
      let temp = myMap.get(myName[i]);
      myMap.set(myName[i], temp + 1);
    } else {
      myMap.set(myName[i], freq);
    }
  }
  return console.log(myMap);
};

findFrequence(myName);
