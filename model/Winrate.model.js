const db = require("../config");

exports.getWinrate = (response) => {
  //query data
  const sql = "SELECT * FROM `winrate`";

  //execute data
  db.query(sql, (error, result) => {
    if (error) return console.log("error: ", error);
    //response data
    const winrates = {
      title: "WINRATE-HERO",
      data: JSON.parse(JSON.stringify(result)),
    };
    response.render("winrate", { winrates });
    response.end();
  });
};

exports.getWinrateById = (id, response) => {
  const sql = `SELECT * FROM winrate WHERE id = '${id}'`;

  db.query(sql, (error, result) => {
    if (error) return console.log("error", error);
    const winrate = {
      title: "DATA WINRATE HERO BY ID",
      data: JSON.parse(JSON.stringify(result)),
    };
    response.render("winrateDetail", { winrate });
    response.end();
  });
};

exports.updateWinrateById = (data, response) => {
  const id = data.id;
  const name = data.name;
  const winrate = data.winrate;

  const sql = `UPDATE winrate SET name = '${name}', winrate = '${winrate}' WHERE id = '${id}'`;

  db.query(sql, (error, result) => {
    if (error) return console.log("error", error);
    response.redirect("/winrate");
    response.end();
  });
};

exports.addWinrate = (data, response) => {
  const name = data.name;
  const winrate = data.winrate;
  const sql = `INSERT INTO winrate (name, winrate) VALUES ('${name}', '${winrate}')`;

  db.query(sql, (error, result) => {
    if (error) return console.log("error", error);
    response.redirect("/winrate");
    response.end();
  });
};

exports.removeWinrate = (id, response) => {
  const sql = `DELETE FROM winrate WHERE id='${id}'`;

  db.query(sql, (error, result) => {
    if (error) return console.log("error", error);
    response.redirect("/winrate");
    response.end();
  });
};
