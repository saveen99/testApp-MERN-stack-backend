const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/users', controller.getUsers);
router.get('/createUser', controller.addUser);
router.get('/updateUser', controller.updateUser);
router.get('/deleteUser', controller.deleteUser);

module.exports = router;