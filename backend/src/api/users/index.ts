import { Router } from "express";
import { 
 Login,
 Register
} from "./controller"; 

const router = Router();


router.post('/register', Register)
router.post('/login', Login)

export default router;
