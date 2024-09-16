const { v4: uuidv4 } = require("uuid");

class Games {
    constructor() {
        this.games = {}; //games store
    }

    printStatus() {
        console.log(this.games);
    }
    /**
     *
     * @returns string
     */
    newGame() {
        //create a new game code
        const code = uuidv4().split("-")[4];

        //save this game code to the open games and add as creator
        this.games[code] = {
            creator: {},
        };
        return code;
    }
    /**
     * @param {string} code
     */
    deleteGame(code) {
        if (!this.games[code]) return -1;
        delete this.games[code];
    }
    /**
     *
     * @param {string} code
     * @returns boolean
     */
    existGame(code) {
        return Object.keys(this.games).includes(code);
    }
    /**
     * @param {string} code
     */
    joinGame(code) {
        this.games[code].joiner = {};
    }
    /**
     * @param {string} gameCode - game code
     * @param {string} side - player side
     * @param {string} number - selected number
     * @returns number\boolean
     */
    selectNumber({ code, side }, number) {
        if (!this.games[code]) return -1;
        else if (!this.games[code].creator || !this.games[code].joiner)
            return -1;
        this.games[code][side].number = number;
        if (this.games[code].creator.number && this.games[code].joiner.number)
            return true;
        return false;
    }
    /**
     *
     * @param {object} gameStatus
     * @returns string
     */
    getNumber({ code, side }) {
        if (
            !this.games[code] ||
            !this.games[code][side] ||
            !this.games[code][side].number
        )
            return -1;
        return this.games[code][side].number;
    }
    /**
     *@param {code} string
     *@param {side} string
     *@param {number} string
     *@returns object
     */
    checkTry({ code, side }, number) {
        const other = side === "creator" ? "joiner" : "creator";
        if (
            !this.games[code] ||
            !this.games[code][other] ||
            !this.games[code][other].number
        )
            return -1;

        const correct = number
            .split("")
            .filter((n) => this.games[code][other].number.includes(n)).length;

        const positioned = number
            .split("")
            .filter(
                (n, i) => this.games[code][other].number.split("")[i] === n
            ).length;

        return {
            correct,
            positioned,
        };
    }
}

module.exports = Games;
