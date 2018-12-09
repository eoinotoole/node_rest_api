const { makeNewError } = require("../handling/errorHandling");

const makeQuery = (db, query) => {
  return new Promise((resolve, reject) => {
    db.query(query, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
};

const getAll = db => {
  const query = "SELECT * FROM `users`";

  return new Promise((resolve, reject) => {
    makeQuery(db, query)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

const getUserById = (db, id) => {
  const query = "SELECT * FROM `users` WHERE id = " + id + "";

  return new Promise((resolve, reject) => {
    makeQuery(db, query)
      .then(data => {
        data.length > 0
          ? resolve(data)
          : reject(makeNewError(404, "Endpoint not found"));
      })
      .catch(err => reject(makeNewError(404, "Endpoint not found")));
  });
};

const deleteUserById = (db, id) => {
  const query = "DELETE FROM `users` WHERE id = " + id + "";

  return new Promise((resolve, reject) => {
    makeQuery(db, query)
      .then(data => {
        data.affectedRows === 1
          ? resolve({ message: `User with the id: ${id} deleted` })
          : reject(makeNewError(404, "Endpoint not found"));
      })
      .catch(err => reject(makeNewError(404, "Endpoint not found")));
  });
};

const createNewUser = (db, { username }) => {
  const query = `INSERT INTO \`users\` SET username = "${username}"`;

  return new Promise((resolve, reject) => {
    makeQuery(db, query)
      .then(() => resolve({ message: `New user ${username} created` }))
      .catch(err => reject(err));
  });
};

module.exports = {
  getAll,
  getUserById,
  deleteUserById,
  createNewUser
};
