import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

const allUsers = {};
const allRooms = [];

io.on("connection", (socket) => {
  // Initialize a user on connection
  allUsers[socket.id] = {
    socket: socket,
    online: true,
    playing: false,
  };

  socket.on("request_to_play", (data) => {
    const currentUser = allUsers[socket.id];
    currentUser.playerName = data.playerName;

    let opponentPlayer = null;

    // Find an available opponent
    for (const key in allUsers) {
      const user = allUsers[key];
      if (user.online && !user.playing && socket.id !== key) {
        opponentPlayer = user;
        break;
      }
    }

    if (opponentPlayer) {
      currentUser.playing = true;
      opponentPlayer.playing = true;

      // Create a new room and add both players to it
      const room = {
        player1: opponentPlayer,
        player2: currentUser,
      };
      allRooms.push(room);

      // Notify both players of their opponent
      currentUser.socket.emit("OpponentFound", {
        opponentName: opponentPlayer.playerName,
        playingAs: "circle",
      });
      opponentPlayer.socket.emit("OpponentFound", {
        opponentName: currentUser.playerName,
        playingAs: "cross",
      });

      // Relay moves between players
      currentUser.socket.on("playerMoveFromClient", (data) => {
        opponentPlayer.socket.emit("playerMoveFromServer", data);
      });
      opponentPlayer.socket.on("playerMoveFromClient", (data) => {
        currentUser.socket.emit("playerMoveFromServer", data);
      });
    } else {
      // No opponent found, notify the player
      currentUser.socket.emit("OpponentNotFound");
    }
  });

  socket.on("disconnect", () => {
    const currentUser = allUsers[socket.id];
    if (!currentUser) return;

    currentUser.online = false;
    currentUser.playing = false;

    // Find and clean up the room if one exists
    const roomIndex = allRooms.findIndex(
      (room) => room.player1.socket.id === socket.id || room.player2.socket.id === socket.id
    );

    if (roomIndex !== -1) {
      const { player1, player2 } = allRooms[roomIndex];
      const opponent = player1.socket.id === socket.id ? player2 : player1;

      if (opponent.socket.connected) {
        opponent.socket.emit("opponentLeftMatch");
        opponent.playing = false;
      }

      allRooms.splice(roomIndex, 1); 
    }

    delete allUsers[socket.id]; 
  });
});

httpServer.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
