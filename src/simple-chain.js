
const chainMaker = {
  chainArray: [],
  getLength() {
    return this.chainArray.length;
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.chainArray.push(`(  )`);
    } else {
      this.chainArray.push(`( ${value} )`);
    }
    return chainMaker;
  },
  removeLink(position) {
    if (this.chainArray[position - 1] == undefined) {
      this.chainArray = [];
      throw new Error();
    }
    this.chainArray.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain() {
    this.chainArray.reverse();
    return chainMaker;
  },
  finishChain() {
    const string = [...this.chainArray];
    this.chainArray = [];
    return string.join("~~");
  }
};

module.exports = chainMaker;
