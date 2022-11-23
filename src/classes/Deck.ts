import { Card } from "./Card";

export default class Deck {
  protected cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  get numberOfCards(): number {
    return this.cards.length;
  }
}
