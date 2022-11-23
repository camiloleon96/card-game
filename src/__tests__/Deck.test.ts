import Deck from "../classes/Deck";
import { Card } from "../classes/Card";

const EXPECTED_NUMBER_OF_CARDS = 2
const cardArray: Card[] = [];
for (let i = 0; i < EXPECTED_NUMBER_OF_CARDS; i++) {
  cardArray.push(new Card(i));
}

describe("Deck Class", () => {
  it("should return the right number of cards", () => {
    const testDeck = new Deck([...cardArray]);
    const numberOfCards = testDeck.numberOfCards
    expect(numberOfCards).toEqual(EXPECTED_NUMBER_OF_CARDS);
  });
});
