function capitalizer(str) {
  const splitter = str.split(" ");
  const newstr = splitter.map(function (split) {
    return split[0].toUpperCase() + split.slice(1);
  });
  return newstr.join(" ");
}
