import { Router } from "express";
import { fetchAllUserData, fetchUserData, updateUser } from "../controller/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.get("/fetch-user-data", authMiddleware, fetchAllUserData);
router.get("/fetch-user-data/:userId", authMiddleware, fetchUserData);
router.put("/update-user-data", authMiddleware, updateUser);

export default router;
