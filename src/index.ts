import { Card } from "./classes/Card";
import { Game } from "./classes/Game";
import { Player } from "./classes/Player";
import { PlayerDeck } from "./classes/PlayerDeck";

function createCards(numberOfCards: number) {
  let newDeck: Card[] = [];
  for (let index = 0; index < numberOfCards; index++) {
    newDeck.push(new Card(index));
  }
  return newDeck;
}

try {
  //create cards
  const NUMBER_OF_CARDS = 52;
  const newcards = createCards(NUMBER_OF_CARDS);
  //initialize player
  const player1 = new Player("Pipo", new PlayerDeck([]));
  const player2 = new Player("Milo", new PlayerDeck([]));
  //initialize Game
  const myGame = new Game(player1, player2, newcards);
  myGame.gameDeck.shuffle();
  myGame.dealCards();
  myGame.startGame();
  
} catch (error) {
  console.error(error);
}