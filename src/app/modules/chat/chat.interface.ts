export type TConversation = {
  participants: string[];
};

export type TMessage = {
  conversationId: string;
  sender: string;
  receiver: string;
  message: string;
};
