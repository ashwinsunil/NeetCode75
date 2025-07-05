function validParenthesis(s) {
  let stack = [];
  for (let char of s) {
    console.log(stack);
    switch (char) {
      case "{":
      case "[":
      case "(":
        stack.push(char);
        break;
      case "}":
        if (stack.pop() !== "{") return false;
        break;
      case ")":
        if (stack.pop() !== "(") return false;
        break;
      case "]":
        if (stack.pop() !== "[") return false;
        break;
      default:
        break;
    }
  }
  console.log(stack);
  return stack.length === 0;
}
console.log(validParenthesis("{[((asdf))]}"));
