// * App Config
const express = require("express");
const app = express();
const { appPort, appUrl } = require("./data/db");

//* Import Raouter
const routerPost = require("./routers/posts");

// * static Asset
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("richiesta ricevuta route: Home");
  const responseData = "Server del mio blog";
  res.header({ "Access-Control-Allow-Origin": "*" });
  res.status(200).send(responseData);
});

app.get("/bacheca", (req, res) => {
  console.log("richiesta ricevuta route: Bacheca");

  if (posts.length > 0) {
    res.header({ "Access-Control-Allow-Origin": "*" });
    res.status(200).json({ posts: posts });
  } else {
    res.header({ "Access-Control-Allow-Origin": "*" });
    res.status(204).json(posts);
  }
});

app.listen(appPort, () => {
  console.log(`Server in ascolto: ${appUrl}`);
});
