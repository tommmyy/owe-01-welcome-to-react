function createPerson(input, otherData) {
  // TODO:
  return null
};

const uglyInput = {
  personData: {
    firstName: "Darth",
    lastName: "Vader",
  },
  metadata: { created: "2022-1-1" },
  unsortedHobbies: ["c", "a", "b"]
};

const objectToMerge = { movie: "Star Wars", url: "https://en.wikipedia.org/wiki/Darth_Vader"}

console.log(createPerson(uglyInput, objectToMerge));

{
  firstName: "Darth",
  lastName: "Vader",
  fullName: "Darth Vader",
  sortedHobbies: ["a", "b", "c"]
}


// Hints:
// Najdi, jak řadit pole
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
