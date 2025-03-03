import { Router } from "express";
import validateData from "../../middlewares/validateData";
import {
  conversationValidationSchema,
  messageValidationSchema,
} from "./chat.validation";
import { ChatController } from "./chat.controller";

const router = Router();

router.post(
  "/conversation",
  validateData(conversationValidationSchema),
  ChatController.createConversation,
);

router.get(
  "/conversation/:companyId/:empId",
  ChatController.getUserConversations,
);

router.post(
  "/message",
  validateData(messageValidationSchema),
  ChatController.createConversationMessage,
);

router.get("/message/:conversationId", ChatController.getConversationMessages);

export const ChatRouter = router;
