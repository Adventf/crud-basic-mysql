const port = 9006;
const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const heroController = require("./controller/hero.controller");
const winrateController = require("./controller/winrate.controller");

server.use(bodyParser.urlencoded({ extended: false }));
server.set("view engine", "ejs");
server.set("views", "view");
server.use(express.static("public"));

server.use("/hero", heroController);
server.use("/winrate", winrateController);

server.use("/", (request, response) => {
  response.send("MAIN SERVER SUCCESS OK!");
});

server.listen(port, () => {
  console.log("server running on " + port);
});
