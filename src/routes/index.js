const express = require('express');
const bookRoute = require('./books.routes');

/* Router() allows to use to: POST, PUT, DELETE, GET, GET{:id} */
function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/books', bookRoute);
}

module.exports = routerApi;
