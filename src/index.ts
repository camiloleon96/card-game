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

//create cards
const NUMBER_OF_CARDS = 30;
const newcards = createCards(NUMBER_OF_CARDS);
//instantiate player
const player1 = new Player("Pipo", new PlayerDeck([]));
const player2 = new Player("Milo", new PlayerDeck([]));
//instantiate Game
const myGame = new Game(player1, player2, newcards);
myGame.startGame();