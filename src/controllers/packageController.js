//  BODY REQUESITION
//  DIMENSOES EM CM
//  PESO EM GRAMAS
// http://localhost:3333/package?height=50&width=50&weight=2&length=20

const Utils = require("../utils/index");

exports.get = (req, res, next) => {
  const stateList = [
    "SP",
    "PR",
    "RJ",
    "SC",
    "RS",
    "MG",
    "MS",
    "GO",
    "MT",
    "TO",
    "BH",
    "ES",
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
  const finalHeight = Utils.onlyNumbers(req.query.height);
  const finalWidth = Utils.onlyNumbers(req.query.width);
  const finalWeight = Utils.onlyNumbers(req.query.weight);
  const finalLength = Utils.onlyNumbers(req.query.length);
  const finalState = req.query.state.toUpperCase();
  let stateChecked = false;

  if (stateList.includes(finalState)) {
    stateChecked = true;
  }

  console.log(
    "Height: ",
    finalHeight,
    "Width: ",
    finalWidth,
    "Weight: ",
    finalWeight,
    "Length: ",
    finalLength,
    "state: ",
    finalState
  );

  if (
    finalHeight > 0 &&
    finalWidth > 0 &&
    finalWeight > 0 &&
    finalLength > 0 &&
    stateChecked
  ) {
    const frete = Utils.freteValue(
      finalHeight,
      finalWidth,
      finalLength,
      finalWeight,
      finalState
    );

    res.status(200).send(`Sucesso! - Preço: ${frete}`);
    console.log("✅ PACKAGE GET ROUTE ACCESS");
    console.log(frete);
  } else {
    res.status(400).send("Erro nos paramentros!");
    console.log("❌ PACKAGE GET ROUTE ACCESS");
  }
};
