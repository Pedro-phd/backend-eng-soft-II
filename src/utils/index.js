exports.onlyNumbers = (string) => {
  const numbers = string.replace(/([^\d])+/gim, "");
  return parseFloat(numbers);
};
