import { Router } from "express";
import ShortenerController from "../controllers/shortenerController";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();

router.post('/shorten', ShortenerController.shortenUrl, authMiddleware);
router.get('/pop/:shortUrl', ShortenerController.popUrl, authMiddleware);

export default router;