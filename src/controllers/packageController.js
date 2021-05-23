//  BODY REQUESITION
//  DIMENSOES EM CM
//  PESO EM KG
// http://localhost:3333/package?height=50&width=50&weight=2

const Utils = require("../utils/index");

exports.get = (req, res, next) => {
  // console.log(req.query);
  const finalHeight = Utils.onlyNumbers(req.query.height);
  const finalWidth = Utils.onlyNumbers(req.query.width);
  const finalWeight = Utils.onlyNumbers(req.query.weight);
  console.log(
    "Height: ",
    finalHeight,
    "Width: ",
    finalWidth,
    "Weight: ",
    finalWeight
  );
  if (finalHeight > 0 && finalWidth > 0 && finalWeight > 0) {
    res.status(200).send("Sucesso!");
    console.log("✅ PACKAGE GET ROUTE ACCESS");
  } else {
    res.status(400).send("Erro nos paramentros!");
    console.log("❌ PACKAGE GET ROUTE ACCESS");
  }
};
