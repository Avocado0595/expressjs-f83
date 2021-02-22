const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');
router.get('/mycourse', coursesController.mycourse);
router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.put('/:id', coursesController.update);
router.get('/:id/edit', coursesController.edit);
router.get('/:slug', coursesController.show);

module.exports = router;