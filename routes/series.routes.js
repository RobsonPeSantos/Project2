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

router.get('/serie/:serieId', async (req, res) => {
  try {
    const serieId = await Serie.findById(req.params.serieId);
    res.render('details', { serie: serieId });
  } catch (err) {
    throw new Error(err);
  }
});

router.get('/serie/create', (req, res) => {
  res.render('create-form');
});

router.post("/serie/create", async (req, res, next) => {
  const data = req.body;
  try {
    const result = await Serie.create(data);
    //console.log(result);
    res.redirect("/series");
  } catch (err) {
    throw new Error(err);
  }
});

router.get("/serie/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  try {
    const serie = await Drone.findById(id);
    res.render("update-form", { serie });
  } catch (err) {
    throw new Error(err);
  }
});

router.post("/serie/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updateResult = await Drone.updateOne({ _id: id }, { $set: data });
    res.redirect("/series");
  } catch (err) {
    throw new Error(err);
  }
});

router.get("/serie/delete", (req, res) =>
  res.render("deleteConfirme")
);

router.get("/serie/:id/delete", async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletionResult = await Serie.deleteOne({ _id: id });
    res.redirect("/series");
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
