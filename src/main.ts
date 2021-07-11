// Model
import User from "./user/user.model.ts";

// Router
import userRouter from "./user/user.router.ts";

/**
 * Initializing modules
 * @param dbConnect Any
 */
export const initModels = (dbConnect: any) => {
  dbConnect.link([User]);
  dbConnect.sync();
};

/**
 * Initializing db
 * @param app Any
 */
export const initRouters = (app: any) => {
  app.use(userRouter.routes());
};

export default {
  initModels,
  initRouters,
};
