import express from "express";
import { depositMoney, getBalance, printStatements, withdrawMoney } from "../controllers/bankController";

const router = express.Router();

router.get("/balance", getBalance);
router.post("/deposit", depositMoney);
router.post("/withdraw", withdrawMoney);
router.get("/printstatements", printStatements);

export default router;