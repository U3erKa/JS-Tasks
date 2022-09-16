const array = ['str1', 'str2', 'str3', 'str4', 'str5', 'str6'];

const numOfStrings = (arr) => arr.length;
console.log(numOfStrings(array)); // 6
console.log(numOfStrings(array.concat('str7 str7', 'str8'))); // 8
console.log(numOfStrings(array.concat('', '', '', ''))); // 10
console.log(numOfStrings(['', '', '', ''])); // 4
