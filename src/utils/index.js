exports.onlyNumbers = (string) => {
  const numbers = string.replace(/([^\d])+/gim, "");
  return parseFloat(numbers);
};

exports.freteValue = (height, width, length, weight, state) => {
  const low = ["SP", "PR", "RJ", "SC", "RS", "MG", "MS"];
  const average = ["GO", "MT", "TO", "BH", "ES"];
  const high = [
    "AC",
    "AL",
    "AP",
    "AM",
    "CE",
    "MA",
    "PA",
    "PB",
    "PE",
    "PI",
    "RN",
    "RO",
    "RR",
    "SE",
    "DF",
  ];

  let priceState = 0;

  if (low.includes(state)) {
    priceState = 15;
  }
  if (average.includes(state)) {
    priceState = 50;
  }
  if (high.includes(state)) {
    priceState = 80;
  }

  const priceByHeight = 1.66; // R$1,66 por cm
  const priceByWidth = 1; // R$1 por cm
  const priceByLength = 1; // R$1 por cm
  const priceByWeight = 0.005; // R$ 0,005 por grama

  const finalFrete =
    height * priceByHeight * (width * priceByWidth) * (length * priceByLength) +
    weight * priceByWeight;
  return finalFrete / 1000 + priceState;
};
