const Games = require("./games");

const games = new Games();

const hasRepeatedChar = (s) => {
    return new Set(s).size !== s.length;
};

let flag = false;

const printer = () => {
    setTimeout(() => {
        console.clear();
        games.printStatus();
        printer();
    }, 1000);
};

const socketController = async (socket) => {
    console.log(socket.id);
    console.log(socket.handshake);

    if (!flag) {
        flag = !flag;
        // printer();
    }

    const gameStatus = {
        code: undefined,
        side: undefined,
    };

    socket.on("create_game", (callback) => {
        if (gameStatus.code) return;

        //create a new game
        gameStatus.code = games.newGame();
        gameStatus.side = "creator";

        //join this connection to this channel
        socket.join(gameStatus.code);

        //client response
        callback(gameStatus.code);
    });

    socket.on("join_game", (gameCode, callback) => {
        if (gameStatus.code) return;
        if (games.existGame(gameCode)) {
            gameStatus.code = gameCode;
            gameStatus.side = "joiner";

            //join this connection to the channel
            socket.join(gameStatus.code);

            //add as joiner to the game code on the open games
            games.joinGame(gameStatus.code);

            //emit the 'paired' event
            socket.to(gameStatus.code).emit("paired");

            //client response
            callback({ status: 200 });
        } else callback({ status: 400 });
    });

    //delete game if the user get out from the creating router and paired has not been confirmed
    socket.on("erase_game", (gameCode) => {
        if (
            !gameStatus.code || //check if is in a game
            gameStatus.code !== gameCode || //check if is the correct game code
            gameStatus.side !== "create" || //check if is a creator
            games.games[gameCode].joiner //check if game has not a joiner
        )
            return;
        games.deleteGame(gameCode);
    });

    //game abbandoned
    socket.on("game_abbandoned", () => {
        if (!gameStatus.code || !gameStatus.side) return;
        games.deleteGame(gameStatus.code);
        socket.to(gameStatus.code).emit("member_disconnected");
        socket.leave(gameStatus.code);
        gameStatus.code = undefined;
        gameStatus.side = undefined;
    });

    //abbandon game when the other has abbandoned
    socket.on("abbandon_game", () => {
        if (!gameStatus.code || !gameStatus.side) return;
        socket.leave(gameStatus.code);
        gameStatus.code = undefined;
        gameStatus.side = undefined;
    });

    //select number
    socket.on("select_number", async (number, callback) => {
        if (!gameStatus.code || !gameStatus.side) {
            callback({ status: 400 });
            return;
        }
        if (typeof number !== "string" && number.length !== 4)
            callback({ status: 400 });

        if (hasRepeatedChar(number)) callback({ status: 400 });
        else {
            await callback({ status: 200 });
            const status = games.selectNumber(gameStatus, number);
            if (!status) {
                socket.emit("waiting_other");
                socket.to(gameStatus.code).emit("player_has_selected");
            } else {
                socket.to(gameStatus.code).emit("game_ready");
                socket.emit("game_ready");
                const first = Math.floor(Math.random() * 2) === 1;
                if (first) socket.emit("your_turn");
                else socket.to(gameStatus.code).emit("your_turn");
            }
        }
    });

    //request number
    socket.on("request_number", (callback) => {
        if (!gameStatus.code || !gameStatus.side) return;
        const number = games.getNumber(gameStatus);
        callback(number);
    });

    //new_try
    socket.on("new_try", async (number, callback) => {
        if (typeof number !== "string" && number.length !== 4)
            callback({ msg: "invalid number" });

        const response = games.checkTry(gameStatus, number);

        if (response.positioned === 4 && response.correct === 4) {
            socket.emit("you_win");
            socket.to(gameStatus.code).emit("you_lose");
            games.deleteGame(gameStatus.code);
            gameStatus = {
                code: undefined,
                side: undefined,
            };
            return;
        }

        await callback(response);

        socket.to(gameStatus.code).emit("your_turn");
    });

    //disconnect from the actual game
    socket.on("disconnect", () => {
        if (gameStatus.code === undefined) return;
        socket.to(gameStatus.code).emit("member_disconnected");
        games.deleteGame(gameStatus.code);
    });
};

module.exports = {
    socketController,
};
