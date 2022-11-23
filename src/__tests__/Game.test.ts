import { Game } from "../classes/Game";
import { Player } from "../classes/Player";
import { PlayerDeck } from "../classes/PlayerDeck";
import { Card } from "../classes/Card";

const cards: Card[] = [];
for (let i = 0; i < 2; i++) {
  console.log(i);
  cards.push(new Card(i));
}
const player1 = new Player("Milo", new PlayerDeck([]));
const player2 = new Player("Cenka", new PlayerDeck([]));

describe("Test the Game class", () => {
  it("should select the winner", () => {
    const myGame = new Game(player1, player2, [...cards]);
    myGame.gameDeck.shuffle();
    myGame.dealCards();

    const spyPlayRound = jest
      .spyOn(myGame, "playRound")
      .mockImplementation(() => "roundWinner");
    const spyDetermineFinaleWinner = jest
      .spyOn(myGame, "determineFinalWinner")
      .mockImplementation(() => "result");
    const spyDrawFinalWinner = jest
      .spyOn(myGame, "drawFinalWinner")
      .mockImplementation(() => {});

    myGame.startGame();
    expect(spyPlayRound).toHaveBeenCalled();
    spyPlayRound.mockRestore();
    spyDetermineFinaleWinner.mockRestore();
    spyDrawFinalWinner.mockRestore();
  });

  it("should Select 'winner' Player as roundWinner", () => {
    //as the cards are not shuffled, he will receive the top cards with bigger value
    const arrangedCards: Card[] = [];
    for (let i = 0; i < 52; i++) {
      console.log(i);
      arrangedCards.push(new Card(i));
    }
    const winnerPlayer = new Player("winner", new PlayerDeck([]));
    const looserPlayer = new Player("looser", new PlayerDeck([]));
    const testGame = new Game(looserPlayer, winnerPlayer, [...arrangedCards]);
    testGame.dealCards();
    console.log(testGame);
    const roundWinner = testGame.playRound(1);
    expect(roundWinner).toEqual("winner");
  });
  it("should Select 'winner' Player as game winner", () => {
    //as the cards are not shuffled, he will receive the top cards with bigger value
    const arrangedCards: Card[] = [];
    for (let i = 0; i < 52; i++) {
      arrangedCards.push(new Card(i));
    }
    const winnerPlayer = new Player("winner", new PlayerDeck([]));
    const looserPlayer = new Player("looser", new PlayerDeck([]));
    const testGame = new Game(looserPlayer, winnerPlayer, [...arrangedCards]);
    testGame.dealCards();
    console.log(testGame);
    const finalWinner = testGame.startGame();
    expect(finalWinner).toEqual("winner");
  });
  it("should Select generate a Draw", () => {
    //as the cards are not shuffled, he will receive the top cards with bigger value
    const arrangedCards: Card[] = [];
    for (let i = 0; i < 52; i++) {
      arrangedCards.push(new Card(1));
    }
    const winnerPlayer = new Player("winner", new PlayerDeck([]));
    const looserPlayer = new Player("looser", new PlayerDeck([]));
    const testGame = new Game(looserPlayer, winnerPlayer, [...arrangedCards]);
    testGame.dealCards();
    console.log(testGame);
    const finalWinner = testGame.startGame();
    expect(finalWinner).toEqual("DRAW");
  });
});
