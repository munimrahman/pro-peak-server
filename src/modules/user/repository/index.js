const User = require("../../../models/User");

const create = async (data) => {
  const user = await User.create(data);
  return user;
};

module.exports = { create };
