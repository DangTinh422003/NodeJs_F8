class NewsController {
    // [GET] , path = '/news'
    index(req, res) {
        res.render('news');
    }

    // [GET] , path = '/news/:slug'
    show(req, res) {
        res.send('news detail!');
    }
}

module.exports = new NewsController();
