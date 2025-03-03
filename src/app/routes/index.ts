import { Router } from "express";
import { ChatRouter } from "../modules/chat/chat.route";

const router = Router();

const allRouters = [ChatRouter];

allRouters.forEach((route) => router.use(route));

export const BaseRouter = router;
