export class Card {
  readonly value: number;

  constructor(value: number) {
    this.value = value;
  }

  compare(rivalCard: Card): number {
    if (this.value > rivalCard.value) {
      return 1;
    } else if (this.value < rivalCard.value) {
      return -1;
    } else {
      return 0;
    }
  }

  draw(): string {
    if (this.value < 10) {
      return `
              ___
             |*  |
             | ${this.value} |
             |___|`;
    } else {
      return `
              ___
             |*  |
             | ${this.value}|
             |___|`;
    }
  }
}
