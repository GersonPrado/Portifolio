/*
* How to create our fundamental game variables
* How to generate a random number
* How to manipulate the DOM
* How to read from the DOM
* How to change CSS styles
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    if (dice !== 1) {
      document.querySelector("#current-" + activePlayer).textContent = roundScore += dice;
    } else nextPlayer();
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying){
      // Add Current score to GLOBAL score
      scores[activePlayer] += roundScore;

      // Update the UI
      document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

      // Check if player won the game
      if ( scores[activePlayer] >= 20 ) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner'
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
      } else nextPlayer()
    }
});

function nextPlayer() {
  var player1 =  document.getElementById('name-0').textContent
  var player2 =  document.getElementById('name-1').textContent
  var player =  activePlayer === 0 ? player1 : player2;
  window.alert(`Ah não ${player}... Você perdeu ${roundScore} pontos! :(` );
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector(".player-0-panel").classList.toggle('active');
  document.querySelector(".player-1-panel").classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;

  var player1 = prompt('Enter your name','Player1');
  var player2 = prompt('Enter your name','Player2');
  document.querySelector('.dice').style.display = 'none';
  // document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = player1 ? player1 : 'Player 1';
  document.getElementById('name-1').textContent = player2 ? player2 : 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  gamePlaying = true;
}
