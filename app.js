const express = require("express");
const app = express();
const route = require("./router");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

app.get("/", (req, res) => {
  res.json({ message: "Selamat datang di tiga bintang API." });
});
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
app.use(cookieParser());

app.use("/v1", route);

app.listen(8000, () => console.log("Selamat Datang, Server ini berjalan"));
