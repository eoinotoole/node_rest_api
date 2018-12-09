const {
  getAll,
  getUserById,
  deleteUserById,
  createNewUser
} = require("../models/users");

const getAllUsers = (req, res, next) => {
  getAll(req.db)
    .then(data => res.json(data))
    .catch(err => next(err));
};

const getUser = (req, res, next) => {
  const id = req.params.id;
  getUserById(req.db, id)
    .then(data => res.json(data))
    .catch(err => next(err));
};

const deleteUser = (req, res, next) => {
  const id = req.params.id;
  deleteUserById(req.db, id)
    .then(data => res.json(data))
    .catch(err => next(err));
};

const createUser = (req, res, next) => {
  const userData = req.body;
  createNewUser(req.db, userData)
    .then(data => res.json(data))
    .catch(err => next(err));
};

module.exports = {
  getAllUsers,
  getUser,
  deleteUser,
  createUser
};
