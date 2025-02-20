import { Router } from "express";
import { 
  createTask, 
  getAllTasks, 
  updateTask, 
  updateTaskStatus,
  deleteTask 
} from "./controller"; 

const router = Router();

router.post("/", createTask);
router.get("/", getAllTasks);
router.put("/:taskId/status/update/:newStatus", updateTaskStatus);
router.put("/:taskId", updateTask);
router.delete("/:taskId", deleteTask);

export default router;
