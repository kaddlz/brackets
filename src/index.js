module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let map = new Map(bracketsConfig);
  for (let char of str) {
    if (stack.length === 0 || map.has(char)) {
      if (map.get(char) === char) {
        if (stack[stack.length - 1] === char) {
          stack.pop();
        } else {
          stack.push(char);
        }
      } else {
        stack.push(char);
      }
    } else {
      let top = stack.pop();
      if (map.get(top) !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
