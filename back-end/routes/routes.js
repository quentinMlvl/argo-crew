import express from "express";

import { addSailor, modifySailor, removeSailor, showSailor, showSailors } from "../controllers/sailorsController.js";

const router = express.Router();


router.get("/sailors", showSailors);

router.get("/sailors/:id", showSailor);

router.post("/sailors", addSailor);

router.put("/sailors/:id", modifySailor);

router.delete("/sailors/:id", removeSailor);

export default router;