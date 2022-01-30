const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("../../swagger.json");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());
app.set("port", 3000);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use("/film", require("../film-api/route/filmRoute"));
app.use("/user", require("../film-api/route/userRoute"));
app.use("/security", require("../film-api/route/loginRoute"));

module.exports = app