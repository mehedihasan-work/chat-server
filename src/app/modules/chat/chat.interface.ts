export type TConversation = {
  companyId: string;
  participants: string[];
};

export type TMessage = {
  conversationId: string;
  sender: string;
  receiver: string;
  message: string;
};
