const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 9000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require("./routes/note_routes")(app, {});

app.listen(port, () => {
  console.log("We are live on " + port);
});

