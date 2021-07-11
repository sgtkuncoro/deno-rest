import User from "./user.model.ts";

/**
 * Get user list
 * @params ctx any
 */

export const getUsers = async () => {
  const users = await User.limit(10).all();
  return users;
};

export default {
  getUsers,
};
