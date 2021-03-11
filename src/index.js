module.exports = function check(str, bracketsConfig) {
  const firstCondition = bracketsConfig.map((item) => item.join(""));
    for (let i = 0; i < firstCondition.length; i++) {
      if (str.includes(firstCondition[i])) {
          str = str.replace(firstCondition[i], "");
          i = -1;
      }
  }
  return str === "";
};
