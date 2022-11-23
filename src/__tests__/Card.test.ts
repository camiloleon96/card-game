import { Card } from '../classes/Card';

describe('Card', () => {
  it('should keep the original value', () => {
    const testCard = new Card(10);
    expect(testCard.value).toBe(10);
  });
});
