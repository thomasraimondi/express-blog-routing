const express = require("express");
const router = express.Router();
const { posts } = require("../data/db");

// # INDEX
router.get("/", (req, res) => {
  console.log("richiesta ricevuta route: Home");
  res.header({ "Access-Control-Allow-Origin": "*" });
  res.status(200).json({ status: 200, success: "ok", data: posts });
});

// # SHOW
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("richiesta per il post: " + id);

  const post = posts.find((post) => post.id === id);

  res.header({ "Access-Control-Allow-Origin": "*" });
  post
    ? res.status(200).json({ status: 200, success: "ok", data: post })
    : res
        .status(404)
        .json({ status: 404, success: "ko", data: "post not found" });
});

// # STORE
router.post("/", (req, res) => {
  console.log("Creazione di un nuovo post");
  res.header({ "Access-Control-Allow-Origin": "*" });
  res.status(201).json({ status: 201, success: "ok", data: "post creato" });
});

// # UPDATE

// # MODIFY

// # DELETE

module.exports = router;
