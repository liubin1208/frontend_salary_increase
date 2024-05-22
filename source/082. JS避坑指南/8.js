function isGameOver() {
  return (
    remaining === 0 ||
    (remaining === 1 && remainingPlayers === 1) ||
    remainingPlayers === 0
  );
}

function checkGameStatus() {
  if (isGameOver()) {
    quitGame();
  }
}
