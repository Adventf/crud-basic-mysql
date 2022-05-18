const express = require("express");
const router = express.Router();
const Winrate = require("../model/Winrate.model");

//get all Winrate list
router.get("/", (request, response) => {
  Winrate.getWinrate(response);
});

//get Winrate by id
router.get("/:id", (request, response) => {
  const id = request.params.id;
  Winrate.getWinrateById(id, response);
});

//update or edit Winrate
router.post("/update", (request, response) => {
  const data = {
    id: request.body.id,
    name: request.body.name,
    winrate: request.body.winrate,
  };
  Winrate.updateWinrateById(data, response);
});

router.post("/add", (request, response) => {
  const data = {
    name: request.body.name,
    winrate: request.body.winrate,
  };
  Winrate.addWinrate(data, response);
});

router.post("/remove", (request, response) => {
  const id = request.body.id;
  Winrate.removeWinrate(id, response);
});

module.exports = router;
