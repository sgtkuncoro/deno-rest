import { oak } from "../../debs.ts";
import userController from "./user.controller.ts";

const { Router } = oak;
const router = new Router();

router.get("/users", userController.getListUser);

export default router;
