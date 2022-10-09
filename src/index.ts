import './style.css'
const { createGameOfLife } = require("./utils/createGameOfLife");

const gameWrapper = document.createElement("div");

document.body.appendChild(gameWrapper);

createGameOfLife(15, 15, gameWrapper);