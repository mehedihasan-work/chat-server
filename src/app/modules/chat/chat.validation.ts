import { z } from "zod";

const conversationValidationSchema = z.object({
  companyId: z.string(),
  participants: z.array(z.string()).length(2, {
    message: "A conversation must have exactly 2 participants",
  }),
});

const messageValidationSchema = z.object({
  conversationId: z.string(),
  sender: z.string(),
  receiver: z.string(),
  message: z.string().min(1, { message: "Message cannot be empty" }),
});

export { conversationValidationSchema, messageValidationSchema };
