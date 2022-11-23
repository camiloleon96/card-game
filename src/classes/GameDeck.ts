import Deck from "./Deck";
import { Card } from "./Card";

export class GameDeck extends Deck {
    
  //Fisher–Yates algorithm:
  shuffle(): Card[] {
    let index = this.cards.length;
    let currentElement;
    let newIndex;
    while (index) {
      newIndex = Math.floor(Math.random() * index--);
      currentElement = this.cards[index];
      //swap new and current elements
      this.cards[index] = this.cards[newIndex];
      this.cards[newIndex] = currentElement;
    }
    return this.cards;
  }

  takeCards(amountOfCards: number): Card[] {
    return this.cards.splice(0, amountOfCards);
  }
}
