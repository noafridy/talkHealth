var express = require('express');
var router = express.Router();
var SubjectsModel = require('../models/subjects')  //שלב 4- יוצרת משתנה למודל כדי שאשתמש בו

// שלב 5- יצירת נק קצה

//add new subject
router.get('/new', async function (req, res, next) {
  let x1 = new SubjectsModel({ name: "Diet", pic: "../img/Salad.jpeg" })
  await x1.save();
  res.send("added");
});



module.exports = router;
