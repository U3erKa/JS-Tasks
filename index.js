'use strict';
class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this._from;
  }
  get to() {
    return this._to;
  }
  get range() {
    return this.#array(this._from, this._to);
  }
  set from(from) {
    this._from = from;
  }
  set to(to) {
    this._to = to;
  }
  set array(array) {
    array(this._from, this._to);
  }
  #array(from, to) {
    let array = [];
    for (let i = 0; i <= to - from; i++) {
      array[i] = i + from;
    }
    return array;
  }
  validate(number) {
    for (let i = 0; i < this.range.length; i++) {
      if (this.range[i] === number) {
        return true;
      }
    }
    return false;
  }
}

const rangeObj = new RangeValidator(5, 10);
console.log(rangeObj);
