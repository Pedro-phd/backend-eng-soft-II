//  BODY REQUESITION
//  DIMENSOES EM CM
//  PESO EM KG
// http://localhost:3333/package?height=50&width=50&weight=2

exports.get = (req, res, next) => {
  console.log(req.query);
  res.status(200).send("Rota GET!");
  console.log("✅ PACKAGE GET ROUTE ACESS");
};
