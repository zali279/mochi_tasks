import { Router } from "express";
import tasks from "../api/tasks/index";
import auth from "../api/users/index";

const router = Router();

router.use("/tasks", tasks);
router.use("/auth",auth)

export default router;
