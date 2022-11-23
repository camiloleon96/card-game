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
    this.dealCards();
  }

  private dealCards(): void {
    let arrayOfPlayers = [this.player1, this.player2];
    let handSize = Math.floor(this.gameDeck.numberOfCards / 2);
    for (const player of arrayOfPlayers) {
      player.hand.pushCards(this.gameDeck.takeCards(handSize));
    }
  }

  playRound(roundCounter: number): string {
    const topCardP1 = this.player1.hand.useTopCard;
    const topCardP2 = this.player2.hand.useTopCard;
    let roundWinner = "";

    const winnerCard = topCardP1?.compare(topCardP2);
    if (winnerCard === 1) {
      roundWinner = this.player1.name;
      this.player1.addPoints();
    } else if (winnerCard === -1) {
      roundWinner = this.player2.name;
      this.player2.addPoints();
    } else {
      roundWinner = "DRAW";
    }

    console.log(`\n-------------round: ${roundCounter}----------------`);
    //Draw player's card
    console.log(this.player1.name);
    console.log(topCardP1?.draw());
    console.log("\n");
    console.log(this.player2.name);
    console.log(topCardP2?.draw());
    //Draw the winner
    console.log(`\n   Round Winner: ${roundWinner}`);
    //Draw players points
    console.log();
    console.log(`${this.player1.name} -> points:${this.player1.totalPoints}`);
    console.log(`${this.player2.name} -> points:${this.player2.totalPoints}`);

    return roundWinner;
  }
}
