import express from "express";
import {
  deleteDetails,
  getDetails,
  updateDetails,
} from "../controllers/configureController.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.get("/details", verifyToken, getDetails);
router.delete("/remove", verifyToken, deleteDetails);
router.put("/update", verifyToken, updateDetails);

export default router;
