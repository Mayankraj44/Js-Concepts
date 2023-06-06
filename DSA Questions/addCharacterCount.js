// Add the character counts and return a string with character followed by its count

const input = "a12c324a51c89d1";
//output a63c349d1

function addCharacter(str) {
  const countArray = str.split(/[A-Za-z]/);
  const aplhabetString = str.split(/[0-9]/).join("");
  const aplhabetMap = {};
  for (let i = 0; i < aplhabetString.length; i++) {
    aplhabetMap[aplhabetString[i]] =
      aplhabetMap[aplhabetString[i]] | (0 + countArray[i + 1]);
  }
  let result = "";
  for (let i in aplhabetMap) {
    result += i + aplhabetMap[i];
  }
}
addCharacter(input);
