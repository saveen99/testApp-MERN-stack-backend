const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/users', controller.getUsers);
router.post('/createUser', controller.addUser);
router.put('/updateUser', controller.updateUser);
router.delete('/deleteUser', controller.deleteUser);

module.exports = router;