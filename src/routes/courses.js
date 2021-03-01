const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');
//manage my course
router.get('/mycourse', coursesController.mycourse);
router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.put('/:id', coursesController.update);
router.patch('/:id/restore', coursesController.restore);
router.delete('/:id', coursesController.destroy);
router.delete('/:id/force', coursesController.forcedestroy);
router.get('/trash', coursesController.trash);

router.get('/:id/edit', coursesController.edit);
router.get('/:slug', coursesController.show);

module.exports = router;