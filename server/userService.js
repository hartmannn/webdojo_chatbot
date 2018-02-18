const jsonDB = require('node-json-db');
const db = new jsonDB("MyDatabase", true, false);

function isUserKnown(senderId) {
  try {
    db.getData('/users/' + senderId);
    return true;
  } catch(error) {
    return false;
  }
}

function addUser(senderId) {
  db.push('/users/' + senderId)
}

function getUser(senderId) {
  return db.getData('/users/' + senderId);
}

function changeUserStatus(senderId, status) {
  db.push('/users/' + senderId + '/status', status);
}

module.exports = {
  isUserKnown: isUserKnown,
  addUser: addUser,
  changeUserStatus: changeUserStatus,
  getUser: getUser
}
