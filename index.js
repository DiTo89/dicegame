function winnerAnnouncment() {
  var playerOneDiceValue = Math.ceil(Math.random() * 6);
  var playerTwoDiceValue = Math.ceil(Math.random() * 6);

  document.querySelector(".img1").setAttribute("src", "images/dice" + playerOneDiceValue + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + playerTwoDiceValue + ".png");

  if (playerOneDiceValue < playerTwoDiceValue) {
    document.querySelector("h1").textContent = "Player 2 Wins#";
  } else if (playerOneDiceValue > playerTwoDiceValue) {
    document.querySelector("h1").textContent = "#Player 1 Wins";
  } else {
    document.querySelector("h1").textContent = "Flat";
  }

}
winnerAnnouncment();