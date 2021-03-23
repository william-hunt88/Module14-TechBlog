const express = require("express");
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(require("./controllers/"));
app.use(express.static(path.join(__dirname, "public")));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });