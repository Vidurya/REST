const express = require('express');
const router = express.Router();
const schoolController = require('../controller/school');

router.post('/', schoolController.create);
router.get('/', schoolController.getAll);
router.get('/:id', schoolController.getById);
router.put('/:id', schoolController.update);

module.exports = router;