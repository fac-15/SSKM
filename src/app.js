const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const helpers = require("./views/helpers/index");
const controllers = require("./controllers/index");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main",
    helpers: helpers
  })
);

app.get("/", (req, response) => {
  controllers.getAllData((err, res) => {
    if (err) {
      console.log(err);
    } else {
      response.render("home", {
        techs: res.rows
      });
    }
  });
});

// router.get("/technology/:name", (req, response) => {
//   console.log(name);
//   controllers.getTech(name, (err, res) => {
//     if (err) console.log(err);
//     response.render("technology", {
//       techs: res
//     });
//   });
// });

app.get("/technology/:name", ({ params: { name } }, response) => {
  controllers.getTech(name, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      response.render("technology", {
        tech: res
      });
    }
  });
});

app.get("/add-tech", (req, res) => {
  res.render("add-tech", {});
});

app.post("/add-tech", (req, res) => {
  console.log("from app.js post req.body:", req.body.name);
  console.log("from app.js post req.body:", req.body.description);
  console.log("from app.js post req.body:", req.body.language);
  console.log("from app.js post req.body:", req.body.author);
  console.log("from app.js post req.body:", req.body.rating);

  controllers.postTech(
    req.body.name,
    req.body.description,
    req.body.language,
    req.body.author,
    req.body.rating,
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        // res.redirect("/");
        // response.render("technology", {
        //   tech: res
        // });
      }
    }
  );
  res.redirect("/");
  // });
});
module.exports = app;
