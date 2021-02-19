
class SiteController {

    //[GET] /about
    about(req, res){
        res.render('about');
    }
    // [GET] /
    index(req, res){
        res.render('home');
    }


}

module.exports = new SiteController;