import { getUsers } from "./user.service.ts";
import log from "../common/logger.ts";
/**
 * Get Users
 * @params ctx any
 */
const getListUser = async (ctx: any) => {
  try {
    const users = await getUsers();
    log.debug("Get user list ");

    ctx.response.body = JSON.stringify({
      success: true,
      data: users,
      meta: {},
    });
  } catch (error) {
    log.warning(error);
    log.debug("Failed get user list ");

    ctx.response.body = JSON.stringify({
      success: false,
      data: null,
      meta: {},
      errors: error,
    });
  }
};

export default {
  getListUser,
};
