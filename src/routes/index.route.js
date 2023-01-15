const newsRouter = require('./news.route')


function route(app) {

  // news router (Định tuyến cho News)
  app.use('/news' , newsRouter)

}

module.exports = route;
