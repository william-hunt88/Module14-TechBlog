const express = require("express");
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const session = require('express-session');
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Its a secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));
app.use(express.json());
app.use(require("./controllers/"));
app.use(express.static(path.join(__dirname, "public")));


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});