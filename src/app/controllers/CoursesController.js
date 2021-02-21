const Course = require('../models/Course');
const { mongooseToObj } = require('../../until/mongoose');
class CoursesController {

    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObj(course) })
            })
            .catch(err=> res.status(404));
    }
    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res){
       var formData = req.body;
       formData.image = req.body.video;
       var course = new Course(formData);
       course.save()
        .then(()=>res.redirect('/'))
        .catch(next)
    }



}

module.exports = new CoursesController;