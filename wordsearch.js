const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  const verticalJoin = verticalSearch(letters);
  for (w of verticalJoin) {
    if (w.includes(word)) {
      return true;
    }
  }
  return false;
};

const verticalSearch = (letters) => {
  const verticalArray = [];
  for (let i = 0; i < letters[i].length; i++) {
    const tempArray = [];
    for (let j = 0; j < letters.length; j++) {
      tempArray.push(letters[j][i]);
    }

    verticalArray.push(tempArray.join(""));
  }
  return verticalArray;
};

module.exports = wordSearch;
