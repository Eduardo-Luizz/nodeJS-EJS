const express = require('express'); //cria um servidor para mostrar no navegador
const app = express();

app.set("view engine", "ejs"); // falando pro express que a ferramenta que vai renderizar o html e ejs

app.get("/", function (req, res) {
  const items = [
    {
      title: "D",
      message: "esenvolver aplicações/serviços de forma fácil"
    },
    {
      title: "E",
      message: "JS usa JavaScript para renderizar HTML"
    },
    {
      title: "+",
      message: "ais que legal é aprender NojeJS"
    }
  ];

  const subtitle = "O EJS é uma linguagem de modelagem para criação de página HTML utilizando JS";

  res.render("pages/index.ejs", {
    qualitys: items,
    subtitle: subtitle
  });
})

app.get("/sobre", function (req, res) {
  res.render("pages/about.ejs");
})

app.listen(8080);
console.log("Rodando...");