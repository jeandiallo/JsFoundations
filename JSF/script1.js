function reverseString(str) {
  const splitter = str.split("");
  const arrRev = splitter.reverse();
  const joiner = arrRev.join("");
  return joiner;
}
