class View {
  constructor(game, el) {
    el.appendChild(this.setupBoard());
    this.game = game
  }

  setupBoard() {
    let parent = document.createElement("ul");
    for (let i = 0; i < 9; i++) {
      let child = document.createElement("li");
      child.classList.add("square");
      child.dataset.row = Math.floor(i/3);
      child.dataset.col = (i%3);
      parent.appendChild(child);
    }
    return parent;
  }

  bindEvents() {}

  handleClick(e) {
    // modify the li value to reflect the token
    // modify the li class to reflect that a move has been made
    this.makeMove( [ e.target.dataset.row, e.target.dataset.col ] )
  }

  makeMove(square) {
    // if (this.game.playMove(square)) {
      // console.log(this.game.playMove())
      // console.log(square[0])
      let chosenSpot = document.querySelector(`[data-row='${square[0]}'][data-col='${square[1]}']`)
      chosenSpot.classList.add("taken")
      this.game.playMove(square)
      console.log(this.game.currentPlayer)
      chosenSpot.innerHTML = `${this.game.currentPlayer.toUpperCase()}`
      console.log(this.game.currentPlayer)

      // console.log(this.game.currentPlayer)
      // chosenSpot.value = this.game.currentPlayer
    // }
  }

}

module.exports = View;
