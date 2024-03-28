import { Router } from "express";
import ShortenerController from "../controllers/shortenerController";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();

router.post('/shorten', authMiddleware, ShortenerController.shortenUrl);
router.get('/pop/:shortUrl', authMiddleware, ShortenerController.popUrl);

export default router;