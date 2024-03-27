import { Router } from "express";
import ShortenerController from "../controllers/shortenerController";

const router = Router();

router.get('/teste', ShortenerController.testeApi);

export default router;