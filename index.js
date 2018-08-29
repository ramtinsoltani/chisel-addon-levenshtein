const levenshtein = require('fast-levenshtein');

module.exports = (str1, str2) => {

  return levenshtein.get(str1, str2);

};
