const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');
//manage my course
router.get('/mycourse', coursesController.mycourse);
router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.post('/handle-form-action', coursesController.handleFormAction);

router.get('/trash', coursesController.trash);
router.patch('/:id/restore', coursesController.restore);
router.delete('/:id/force', coursesController.forcedestroy);
router.get('/:id/edit', coursesController.edit);
router.put('/:id', coursesController.update);
router.delete('/:id', coursesController.destroy);
router.get('/:slug', coursesController.show);


module.exports = router;