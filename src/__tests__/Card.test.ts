import { Card } from '../classes/Card';

describe('Card Class', () => {
  it('Should keep the original value', () => {
    const testCard = new Card(10);
    expect(testCard.value).toBe(10);
  });

  it('Should print the card with the value', () => {
    const testCard = new Card(17);
    expect(testCard.draw()).toEqual(`
              ___
             |*  |
             | 17|
             |___|`);
  });

  it('Should compare its value against other cards', () => {
    const lowerCard = new Card(5);
    const higherCard = new Card(20);
    const sameCard = new Card(20);
    expect(lowerCard.compare(higherCard)).toEqual(-1);
    expect(higherCard.compare(lowerCard)).toEqual(1);
    expect(higherCard.compare(sameCard)).toEqual(0);
  });
});
