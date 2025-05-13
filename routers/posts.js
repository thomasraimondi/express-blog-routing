const express = require("express");
const router = express.Router();
const { posts } = require("../data/db");

// # INDEX
router.get("/", (req, res) => {
  console.log("richiesta ricevuta route: Home");
  res.header({ "Access-Control-Allow-Origin": "*" });
  res.status(200).send({ status: 200, success: "ok", data: posts });
});

// # SHOW
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("richiesta per il post: " + id);

  const post = posts.find((post) => post.id === id);

  res.header({ "Access-Control-Allow-Origin": "*" });
  post
    ? res.status(200).send({ status: 200, success: "ok", data: post })
    : res
        .status(404)
        .send({ status: 404, success: "ko", data: "post not found" });
});

module.exports = router;
