import { Router } from "express";
import { getExchangeRate } from "../controllers/controller";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the Exchanger API!" });
});
router.get("/convert", getExchangeRate);

export default router;
