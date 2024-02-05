import { addScoreController } from "../controllers/addScore";
import { getScoreListController } from "../controllers/getScoreList";

const express = require("express");

const router = express.Router();
// Make POST requests to store or update score based on player name
router.post("/", addScoreController);
// Make GET request to fetch all players from the DB
router.get("/", getScoreListController);

module.exports = router;
