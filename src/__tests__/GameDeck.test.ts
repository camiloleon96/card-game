import { GameDeck } from "../classes/GameDeck";
import { Card } from "../classes/Card";

const controlCards: Card[] = [];
for (let i = 0; i < 4; i++) {
    controlCards.push(new Card(i));
}
const controlCardValues = controlCards.map(x => x.value);

describe('GameDeck Class', ()=>{
    it('should shuffle the cards', ()=>{
        const testGameDeck = new GameDeck([...controlCards]);
        const shuffledCards = testGameDeck.shuffle();
        const shufledCardsValues = shuffledCards.map(x => x.value);
        expect(shufledCardsValues).not.toEqual(controlCardValues);
    });
    it('should return top two cards', () => {
        const testGameDeck = new GameDeck([...controlCards]);
        const gmaeDeckTakenCards = testGameDeck.takeCards(2);
        const gmaeDeckTakenCardsValues = gmaeDeckTakenCards.map(x => x.value);
        //console.log(controlCards);
        expect(gmaeDeckTakenCardsValues[0]).toEqual(controlCardValues[0]);
        expect(gmaeDeckTakenCardsValues[1]).toEqual(controlCardValues[1]);
    });
})