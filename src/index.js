const View = require("./ttt-view");// require appropriate file
const Game = require("../ttt_node/game");// require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  // Your code here

  let ttt = document.querySelector(".ttt");
  let g = new Game();
  let v = new View(g,ttt);
});
