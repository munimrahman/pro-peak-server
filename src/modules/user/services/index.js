const userRepository = require("../repository");

const createUserService = async (body) => {
  const data = await userRepository.create(body);
  return data;
};

module.exports = { createUserService };
