const currentUsers = [];

function joinUser(id, username, room) {
  const user = { id, username, room };

  currentUsers.push(user);
  console.log(currentUsers, "users");

  return user;
}

console.log("user out", currentUsers);

function getCurrentUser(id) {
  return currentUsers.find((user) => user.id === id);
}

function userDisconnect(id) {
  const index = currentUsers.findIndex((user) => user.id === id);

  if (index !== -1) {
    return currentUsers.splice(index, 1)[0];
  }
}

module.exports = {
  joinUser,
  getCurrentUser,
  userDisconnect,
};