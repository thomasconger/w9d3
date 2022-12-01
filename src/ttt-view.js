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
    if (this.winner) return;
    this.currPlayer = this.game.currentPlayer;
    this.makeMove( [ e.target.dataset.row, e.target.dataset.col ] )
    if (this.game.isOver()) {
      this.winner = this.game.winner();
      let squares = document.getElementsByClassName("square");
      
      for (let i = 0; i < squares.length; i++) {
        if (squares[i].innerHTML === `${this.winner}`) {
          squares[i].classList.add("winner");
        }
      }

      alert(`${this.winner} won!`);
    }
  }

  makeMove(square) {
    let chosenSpot = document.querySelector(`[data-row='${square[0]}'][data-col='${square[1]}']`)
    chosenSpot.classList.add("taken")
    this.game.playMove(square)
    chosenSpot.innerHTML = this.currPlayer; //`${this.game.currentPlayer.toUpperCase()}`
    console.log(this.game.currentPlayer)
  }

}

module.exports = View;
