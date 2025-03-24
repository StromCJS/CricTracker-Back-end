import { Router } from "express";
import { loginAdmin, logoutAdmin } from "../controllers/auth-admin.controller.js";
import {
    createTournament,
    updateTournament,
    getTournaments,
    createMatch,
    updateMatch,
    getMatches,
    generateFixturesForTournament // Include this since it’s defined in the controller
} from "../controllers/tournament-match.controller.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";

const router = Router();

// Auth routes
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);
router.get("/profile", adminMiddleware, (req, res) => res.status(200).json({ message: "this is admin protected route" }));

// Tournament routes
router.post("/tournaments", adminMiddleware, createTournament);
router.put("/tournaments/:id", adminMiddleware, updateTournament);
router.get("/tournaments", adminMiddleware, getTournaments);

// Match routes
router.post("/matches", adminMiddleware, createMatch);
router.put("/matches/:matchId", adminMiddleware, updateMatch); // Fixed to include both tournamentId and matchId
router.get("/matches", adminMiddleware, getMatches);

// Fixture generation route
router.post("/tournaments/:id/generate-fixtures", adminMiddleware, generateFixturesForTournament);

export default router;