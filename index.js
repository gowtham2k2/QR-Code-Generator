import qr from "qrcode";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import bodyParser from "body-parser";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = 5000;
const app = express();

//should be used before post route or anyother routing method
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/generate", (req, res) => {
  const urlText = req.body["url"];

  if (urlText !== "") {
    var opts = {
      errorCorrectionLevel: "H",
      type: "image/jpeg",
      quality: 0.92,
      scale: 10,
      margin: 8,
      color: {
        dark: "#292852",
        light: "#FFF",
      },
    };

    qr.toDataURL(urlText, opts, (err, url) => {
      if (err) throw err;
      res.render("index.ejs", {
        qrCode: url,
        urlText: urlText,
      });
    });
  } else {
    res.render("index.ejs", {
      alert: "Please enter some URL.",
    });
  }
});

app.listen(port, () => {
  console.log("app is Listening on port: " + port);
});
