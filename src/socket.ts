import { Server as HttpServer } from "http";
import { Server as SocketServer } from "socket.io";

let io: SocketServer | null = null;

export const initializeSocket = (server: HttpServer) => {
  io = new SocketServer(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  console.log("Socket.io initialized.");

  io.on("connection", (socket) => {
    console.log("Client connected", socket.id);

    socket.on("join", (conversationId: string) => {
      socket.join(conversationId);
      console.log(`User ${socket.id} joined conversation: ${conversationId}`);
    });

    socket.on("disconnect", () => {
      console.log(`Client disconnected:`, socket.id);
    });
  });

  return io;
};

export const getIo = (): SocketServer => {
  if (!io) {
    throw new Error("Socket.io not initialized.");
  }
  return io;
};
