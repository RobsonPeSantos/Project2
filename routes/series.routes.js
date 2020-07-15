const express = require("express");
const Serie = require("../models/series.models");
const router = express.Router();

router.get("/series", async (req, res) => {
  try {
    const localData = await Serie.find();
    res.render("series", { series: localData });
  } catch (err) {
    throw new Error(err);
  }
});

router.get("/serie/:serieId", async (req, res) => {
  try {
    const serieId = await Serie.findById(req.params.serieId);
    res.render("details", { serie: serieId });
  } catch (err) {
    throw new Error(err);
  }
});

router.get("/create/serie", (req, res) => {
  res.render("create-form");
});

router.post("/create/serie", async (req, res, next) => {
  const data = req.body;

  try {
    const result = await Serie.create(data);
    res.redirect("/series");
  } catch (err) {
    throw new Error(err);
  }
});

router.get("/idit/serie/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const serie = await Serie.findById(id);
    res.render("update-form", { serie });
  } catch (err) {
    throw new Error(err);
  }
});

router.post("/idit/serie/:id", async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updateResult = await Serie.updateOne({ _id: id }, { $set: data });
    res.redirect("/series", { updateResult });
  } catch (err) {
    throw new Error(err);
  }
});

router.get("/delete/serie/:id", (req, res) => res.render("deleteConfirme"));

router.get("/delete/serie/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletionResult = await Serie.deleteOne({ _id: id });
    console.log(deletionResult);
    res.redirect("/series");
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
