const Course = require('../models/Course');
class SiteController {

    //[GET] /about
    about(req, res){
        res.render('about');
    }
    // [GET] /
    index(req, res){

        Course.find({})
            .then(courses=>res.render('home', courses))
            .catch(error=>next(error));
        //res.render('home');
    }


}

module.exports = new SiteController;