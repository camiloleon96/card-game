import { Card } from "./classes/Card";
import { Game } from "./classes/Game";

function createCards(numberOfCards: number) {
  let newDeck: Card[] = [];
  for (let index = 0; index < numberOfCards; index++) {
    newDeck.push(new Card(index));
  }
  return newDeck;
}

const NUMBER_OF_CARDS = 2;
const newcards = createCards(NUMBER_OF_CARDS);
const myGame = new Game("Pipo", "Milo", newcards);
console.log(myGame.gameDeck)
console.log(myGame.player1.hand.useTopCard?.draw());
console.log(myGame.player2.hand.useTopCard?.draw());
