import { Card } from "./Card";
import { GameDeck } from "./GameDeck";
import { Player } from "./Player";
import { PlayerDeck } from "./PlayerDeck";

export class Game {
  gameDeck: GameDeck;
  player1: Player;
  player2: Player;

  constructor(player1NAme: string, player2Name: string, newCards: Card[]) {
    this.gameDeck = new GameDeck(newCards);
    this.player1 = new Player(player1NAme, new PlayerDeck([]));
    this.player2 = new Player(player2Name, new PlayerDeck([]));
    this.setUp();
  }

  private setUp(): void {
    this.gameDeck.shuffle();
  }
}
