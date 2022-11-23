import { PlayerDeck } from "./PlayerDeck";

export class Player {
  name: string;
  hand: PlayerDeck;
  private points: number;

  constructor(name: string, hand: PlayerDeck) {
    this.name = name;
    this.hand = hand;
    this.points = 0;
  }

  get totalPoints(): number {
    return this.points;
  }

  addPoints(): void {
    this.points++;
  }
}
