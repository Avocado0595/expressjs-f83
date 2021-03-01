const Course = require('../models/Course');
const { multiMongooseToObj, mongooseToObj } = require('../../until/mongoose');
class CoursesController {

    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObj(course) })
            })
            .catch(err => res.status(404));
    }
    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }
    //[POST] /courses/store
    store(req, res, next) {
        var formData = req.body;
        formData.image = req.body.video;
        var course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }
    //[GET] /courses/mycourse
    mycourse(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, countDeletedCourse])=>{
                res.render('me/courses', { courses: multiMongooseToObj(courses), countDeletedCourse })
            })
    }
    //[GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => {
                res.render('courses/edit', { course: mongooseToObj(course) })
            })
            .catch(err => res.status(404));
    }
    //[PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/courses/mycourse'))
            .catch(next)
    }
    //[DELETE] /courses/:id
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[GET] /courses/trash
    trash(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-courses', { courses: multiMongooseToObj(courses) }))
            .catch(next);
    }
    //[PATCH] /courses/:id/restore
    restore(req, res, next) {
        Course.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[DELETE] /courses/:id/force
    forcedestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

}

module.exports = new CoursesController;