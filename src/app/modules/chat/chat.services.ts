import { getIo } from "../../../socket";
import prisma from "../../utils/prisma";
import { TConversation, TMessage } from "./chat.interface";

const createConversation = async (payload: TConversation) => {
  const [user1, user2] = payload.participants.sort();

  const checkIfConversationExist = await prisma.conversation.findFirst({
    where: {
      participants: {
        hasEvery: [user1, user2],
      },
    },
  });

  if (checkIfConversationExist) {
    return checkIfConversationExist;
  } else {
    const result = await prisma.conversation.create({
      data: payload,
    });

    return result;
  }
};

const getUserConversations = async (empId: string) => {
  const conversations = await prisma.conversation.findMany({
    where: {
      participants: {
        hasSome: [empId],
      },
    },
  });

  return conversations;
};

const createConversationMessage = async (payload: TMessage) => {
  const checkConversationId = await prisma.conversation.findUnique({
    where: {
      id: payload.conversationId,
    },
  });

  if (!checkConversationId) {
    throw new Error("No conversation exist with the given conversationId");
  }

  const result = await prisma.message.create({
    data: payload,
  });

  if (result.id) {
    const io = getIo();
    io.to(payload.conversationId).emit("newMessage", result);
  }

  return result;
};

const getConversationMessages = async (conversationId: string) => {
  const checkConversationId = await prisma.conversation.findUnique({
    where: {
      id: conversationId,
    },
  });

  if (!checkConversationId) {
    throw new Error("No conversation exist with the given conversationId");
  }

  const result = await prisma.message.findMany({
    where: {
      conversationId: checkConversationId?.id,
    },
  });

  return result;
};

export const ChatServices = {
  createConversation,
  getUserConversations,
  createConversationMessage,
  getConversationMessages,
};
