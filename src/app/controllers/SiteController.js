const Course = require('../models/Course');
const {multiMongooseToObj} = require('../../until/mongoose');
class SiteController {

    //[GET] /about
    about(req, res){
        res.render('about');
    }
    // [GET] /
    index(req, res, next){

        Course.find({})
            .then(courses=>res.render('home', {courses: multiMongooseToObj(courses)}))
            .catch(next);
        //res.render('home');
    }


}

module.exports = new SiteController;