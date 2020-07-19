const { Router } = require("express");
const router = new Router();
const bcryptjs = require("bcryptjs");
const saltRounds = 10;
const User = require("../models/user.model");
const Serie = require("../models/series.models")
const mongoose = require("mongoose");

//levando para o hbs signup.hbs
router.get("/signup", (req, res) => res.render("auth/signup"));

//verifica se o user existe, e cadastrando novo user
router.post("/signup", (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.render("auth/signup", {
      errorMessage:
        "All fields are mandatory. Please provide your username, email and password.",
    });
    return;
  }

  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  
  if (!regex.test(password)) {
    res.status(500).render("auth/signup", {
      errorMessage:
        "Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.",
    });
    return;
  }

  bcryptjs
    .genSalt(saltRounds)
    .then((salt) => bcryptjs.hash(password, salt))
    .then((hashedPassword) => {
      return User.create({
        username,
        email,
        passwordHash: hashedPassword,
      });
    })
    .then((userFromDB) => {
      console.log("Newly created user is: ", userFromDB);
      res.redirect("/userProfile");
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).render("auth/signup", { errorMessage: error.message });
      } else if (error.code === 11000) {
        res.status(500).render("auth/signup", {
          errorMessage:
            "Username and email need to be unique. Either username or email is already used.",
        });
      } else {
        next(error);
      }
    });
});

//Levando para o hbs login.hbs
router.get("/", (req, res) => res.render("auth/login"));

//Buscando o user e vendo se ele existe
router.post("/", (req, res, next) => {
  const { email, password } = req.body;

  if (email === "" || password === "") {
    res.render("auth/login", {
      errorMessage: "Please enter both, email and password to login.",
    });
    return;
  }

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        res.render("auth/login", {
          errorMessage: "Email is not registered. Try with other email.",
        });
        return;
      }
      bcryptjs
        .compare(password, user.passwordHash)
        .then((success) => {
          if (success) {
            req.session.currentUser = user;
            return res.redirect("/userProfile");
          }
          res.render("auth/login", { errorMessage: "Incorrect password." });
        })
        .catch((err) => {
          throw new Error(err);
        });
    })
    .catch((error) => next(error));
});

//Logout
router.post("/logout", (req, res) => {
   req.session.destroy();
  res.redirect("/");
});

// Protegendo rota privada
router.get("/userProfile", async (req, res) => {
  console.log('your sess exp: ', req.session.cookie.expires);
  if (req.session.currentUser) {
    const series = req.session.currentUser._id;
    const seriesUser = await Serie.find({'favoriteSeries': series}).populate('favoriteSeries').exec();
    return res.render("users/profile", { userInSession: req.session.currentUser, serie: seriesUser});
  }
   res.redirect("/");
});

module.exports = router;
