class View {
  constructor(game, el) {
    el.appendChild(this.setupBoard());
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
    // check if valid position
    // fetch the token to make a move
    // modify the li value to reflect the token
    // modify the li class to reflect that a move has been made
    console.log(e.target)
  }

  makeMove(square) {}

}

module.exports = View;
