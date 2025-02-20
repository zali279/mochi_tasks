import { Router } from "express";
import tasks from "../api/tasks/index";

const router = Router();

router.use("/tasks", tasks);

export default router;
