const express = require("express");
const router = express.Router();
let { posts } = require("../data/db");

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
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("richiesta la modifica del post: " + id);

  const post = posts.find((post) => post.id === id);

  res.header({ "Access-Control-Allow-Origin": "*" });
  post
    ? res.status(202).json({ status: 202, success: "ok", data: post })
    : res
        .status(404)
        .json({ status: 404, success: "ko", data: "post not found" });
});

// # MODIFY
router.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("richiesta la modifica del post: " + id);

  const post = posts.find((post) => post.id === id);

  res.header({ "Access-Control-Allow-Origin": "*" });
  post
    ? res.status(202).json({ status: 202, success: "ok", data: post })
    : res
        .status(404)
        .json({ status: 404, success: "ko", data: "post not found" });
});

// # DELETE
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("richiesta l'eliminazione del post: " + id);
  const post = posts.find((post) => post.id === id);

  res.header({ "Access-Control-Allow-Origin": "*" });
  if (post) {
    posts = posts.filter((post) => post.id !== id);
    res.status(200).json({ status: 200, success: "ok", data: posts });
  } else {
    res
      .status(404)
      .json({ status: 404, success: "ko", data: "post not found" });
  }
});

module.exports = router;
