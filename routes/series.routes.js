const express = require("express");
const Serie = require("../models/series.models");
const router = express.Router();

router.get("/series", async (req, res) => {
  try {
    //const localData = await Serie.find();
    localData = [
      {
        "title": "Dark", //título
        "cast": ["Louis Hofmann", "Oliver Masucci", "Jördis Triebel"], //elenco
        "genre": "Drama", // gênero
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FDark&psig=AOvVaw33yaLJL6nB58q55P_-_2As&ust=1594754237750000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDk3ND4yuoCFQAAAAAdAAAAABAI", //foto de capa
        "description": "Quatro famílias iniciam uma desesperada busca por respostas quando uma criança desaparece e um complexo mistério envolvendo três gerações começa a se revelar.", //descrição
        "rate": 9
      },
  ];
    res.render("series", { series: localData });
  } catch (err) {
    throw new Error(err);
  }
});

router.get('/series/:serieId', async (req, res) =>  {
  try{
      const serieId = await Serie.findById(req.params.serieId);
      // res.send({hostId})
      res.render('guest/details-host', {serie : serieId});
  }catch(err){
      throw new Error(err);
  }
});

module.exports = router;
