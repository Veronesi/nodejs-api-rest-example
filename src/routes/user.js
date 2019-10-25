const { Router } = require('express');
const router = Router();

/* --- Controllers --- */
const userController = require('../controllers/user');

/* --- Routes Web --- */
router.get('/', userController.getAll);
router.post('/', userController.new);
router.patch('/:id', userController.change);
router.delete('/:id', userController.delete);
router.get('/:id', userController.getById);

module.exports = router;
