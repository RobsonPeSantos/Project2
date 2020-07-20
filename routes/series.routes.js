const express = require("express");
const Serie = require("../models/series.models");
const router = express.Router();

///Buscar todas as series
router.get("/series", async (req, res) => {
  try {
    const localData = await Serie.find();
    res.render("series", { series: localData });
  } catch (err) {
    throw new Error(err);
  }
});

//Busca somente a serie declarada no parametro :serieid
router.get("/serie/:serieId", async (req, res) => {
  try {
    const serieId = await Serie.findById(req.params.serieId);
    res.render("details", { serie: serieId });
  } catch (err) {
    throw new Error(err);
  }
});

//Renderiza o Form de criação se series
router.get("/create/serie", (req, res) => {
  res.render("create-form");
});

//Adiciona uma nova serie
router.post("/create/serie", async (req, res, next) => {
  const data = req.body;
  data.favoriteSeries = req.session.currentUser;

  try {
    const result = await Serie.create(data);
    console.log(result);
    res.redirect("/UserProfile");
  } catch (err) {
    throw new Error(err);
  }
});

//Renderiza uma serie para editação
router.get("/edit/serie/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const serie = await Serie.findById(id);
    res.render("update-form", { serie });
  } catch (err) {
    throw new Error(err);
  }
});

//edita a serie com o :id no parametro a URL
router.post("/edit/serie/:id", async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updateResult = await Serie.updateOne({ _id: id }, { $set: data });
    res.redirect("/series");
  } catch (err) {
    throw new Error(err);
  }
});

//Deleta uma serie
router.get("/serie/delete/:id", async (req, res) => {
  try {
    const deletionResult = await Serie.deleteOne({ _id: req.params.id });
    console.log(deletionResult);
    res.redirect("/UserProfile");
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
