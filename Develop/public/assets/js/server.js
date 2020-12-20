// Bring in Express
const express = require("express");
const bodyParser = require("body-parser");

//create a variable for express
const app = express();

//list port that will listne for incoming request
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Allow server to listen to incoming requests
app.listen(PORT, function () {
  console.log("App listening on PORT" + PORT);
});
