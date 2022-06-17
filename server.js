const express = require('express'); //cria um servidor para mostrar no navegador
const app = express();

app.set("view engine", "ejs"); // falando pro express que a ferramenta que vai renderizar o html e ejs

app.get("/", function (req, res) {
  res.render("pages/index.ejs");
})

app.get("/sobre", function (req, res) {
  res.render("pages/about.ejs");
})

app.listen(8080);
console.log("Rodando...");