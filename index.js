const scrapeIt = require('scrape-it');
//import scrapeIt from "scrape-it";

scrapeIt("https://www.infomoney.com.br/cotacoes/viavarejo-vvar3/", {
    title: "h1",
    value: "div.value p",
    percentage: "div.percentage p"
}).then(page =>
    console.log(page)
).catch(err => console.log(err));