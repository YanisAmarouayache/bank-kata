import express from "express";
import { depositMoney, getBalance, withdrawMoney } from "../controllers/bankController";

const router = express.Router();

router.get("/balance", getBalance);
router.post("/deposit", depositMoney);
router.post("/withdraw", withdrawMoney);

export default router;