const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect = isDirect != undefined ? isDirect : true;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    this.square = [];
    this.generateVigSquare();
  }
  generateVigSquare() {
    let alphabet = this.alphabet;

    for (var i = 0; i < alphabet.length; i++) {
      this.square[i] = alphabet.slice(i).concat(alphabet.slice(0, i));
    }
  }
  encrypt(string, key) {
    const currentKey = key.repeat(Math.ceil(string.length / key.length));
    let result = "";
    let countSpecialSymbols = 0;
    for (let i = 0; i < string.length; i++) {
      const index = i - countSpecialSymbols;

      if (
        this.alphabet.indexOf(string[i].toUpperCase()) === -1 ||
        this.alphabet.indexOf(currentKey[index].toUpperCase()) === -1
      ) {
        result += string[i];
        countSpecialSymbols += 1;
      } else {
        result += this.square[this.alphabet.indexOf(string[i].toUpperCase())][
          this.alphabet.indexOf(currentKey[index].toUpperCase())
        ];
      }
    }
    return this.isDirect == false
      ? result
          .split("")
          .reverse()
          .join("")
      : result;
  }
  decrypt(string, key) {
    const currentKey = key.repeat(Math.ceil(string.length / key.length));
    let result = "";
    let countSpecialSymbols = 0;
    for (let i = 0; i < string.length; i++) {
      const index = i - countSpecialSymbols;

      if (
        this.alphabet.indexOf(string[i].toUpperCase()) === -1 ||
        this.alphabet.indexOf(currentKey[index].toUpperCase()) === -1
      ) {
        result += string[i];
        countSpecialSymbols += 1;
      } else {
        const row = this.alphabet.indexOf(currentKey[index].toUpperCase());
        const coll = this.square[row].indexOf(string[i].toUpperCase());
        result += this.alphabet[coll];
      }
    }
    return this.isDirect == false
      ? result
          .split("")
          .reverse()
          .join("")
      : result;
  }
}
module.exports = VigenereCipheringMachine;
