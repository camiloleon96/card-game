import { Player } from "../classes/Player";
import { PlayerDeck } from "../classes/PlayerDeck";

const emptyDeck = new PlayerDeck([]);

describe("Player Class", () => {
  it("should initialize with 0 points", () => {
    const testPlayer = new Player("milo", emptyDeck);
    const totalPoints = testPlayer.totalPoints;
    expect(totalPoints).toEqual(0);
  });

  it("should be able to store the points", () => {
    const testPlayer = new Player("milo", emptyDeck);
    testPlayer.addPoints();
    const totalPoints = testPlayer.totalPoints;
    expect(totalPoints).toEqual(1);
  });
});
