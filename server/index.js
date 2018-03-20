const express = require('express');
const Denon = require('./Denon');
const routes = require('./routes');

const app = express();
const port = 2222;

const denon = new Denon();
denon.connect();

app.use(
  '/',
  (req, res, next) => {
    res.locals.denon = denon;
    next();
  },
  routes,
);

app.listen(port, () => {
  console.log(`server listening @ ${port}`);
});
