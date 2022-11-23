import { Card } from "./Card";
import Deck from "./Deck";

export class PlayerDeck extends Deck {
  pushCards(newCards: Card[]) {
    this.cards.push(...newCards);
  }

  get useTopCard(): Card | undefined {
    return this.cards.pop();
  }
}
