const { response } = require('./app');
const User = require('./model');

const getUsers = (req, res, next) => {
    User.find()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ message: error })
        })
};



exports.getUsers = getUsers;
exports.getUsersById = getUsersById;