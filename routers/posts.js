const express = require("express");
const router = express.Router();
const { posts } = require("../data/db");

// # INDEX
router.get("/", (req, res) => {
  console.log("richiesta ricevuta route: Home");
  res.header({ "Access-Control-Allow-Origin": "*" });
  res.status(200).send({ status: 200, success: "ok", data: posts });
});

module.exports = router;
