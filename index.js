const express = require("express");
const cors = require("cors");
const app = express();
var port = process.env.PORT || 3333;

require("./src/routes/index")(app);

app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log("🚀 API ON");
});
