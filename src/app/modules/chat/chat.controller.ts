import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { ChatServices } from "./chat.services";

const createConversation = catchAsync(async (req, res) => {
  const result = await ChatServices.createConversation(req.body);

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: 201,
    message: "Conversation created successfully",
    data: result,
  });
});
const getUserConversations = catchAsync(async (req, res) => {
  const { companyId, empId } = req.params;
  const result = await ChatServices.getUserConversations(empId);

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: 201,
    message: "Conversations fetched successfully",
    data: result,
  });
});

const createConversationMessage = catchAsync(async (req, res) => {
  const result = await ChatServices.createConversationMessage(req.body);

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: 201,
    message: "Message created successfully",
    data: result,
  });
});

const getConversationMessages = catchAsync(async (req, res) => {
  const { conversationId } = req.params;
  const result = await ChatServices.getConversationMessages(conversationId);

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: 201,
    message: "Messages fetched successfully",
    data: result,
  });
});

export const ChatController = {
  createConversation,
  getUserConversations,
  createConversationMessage,
  getConversationMessages,
};
