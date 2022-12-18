const numOfWords = (string) => string.trim().split(' ').length;

const lengthOfBiggestWord = (string) => {
  let longestWord = 0;
  const words = string.trim().split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord) {
      longestWord = words[i].length;
    }
  }
  return longestWord;
};
