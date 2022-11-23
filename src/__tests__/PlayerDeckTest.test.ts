import { PlayerDeck } from "../classes/PlayerDeck";
import { Card } from "../classes/Card";

const NUMBER_OF_CONTROL_CARDS = 4;
const controlCards: Card[] = [];
for (let i = 0; i < NUMBER_OF_CONTROL_CARDS; i++) {
  controlCards.push(new Card(i));
}
console.log(controlCards);

describe("PlayerDeck Class", () => {

  it("should be able to receive cards", () => {
    const testPlayerDeck = new PlayerDeck([]);
    testPlayerDeck.pushCards([...controlCards]);
    expect(testPlayerDeck.numberOfCards).toEqual(NUMBER_OF_CONTROL_CARDS);
  });
  
  it("should take only the top card", () => {
    const testPlayerDeck = new PlayerDeck([]);
    testPlayerDeck.pushCards([...controlCards]);
    const topCard = testPlayerDeck.useTopCard;
    expect(topCard).toEqual(controlCards.at(-1));
    expect(testPlayerDeck.numberOfCards).toEqual(NUMBER_OF_CONTROL_CARDS - 1);
  });
});
