interface ICard {
  readonly value: number;
}
export class Card {
  readonly value: number;

  constructor(value: number) {
    this.value = value;
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
