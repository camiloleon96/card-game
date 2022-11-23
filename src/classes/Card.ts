interface ICard {
  readonly value: number;
}
export class Card {
  readonly value: number;

  constructor(value: number) {
    this.value = value;
  }

  draw(): string {
    return `
            ___
           |   |
           | ${this.value} |
           |___|`;
  }
}
