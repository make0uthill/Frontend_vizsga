import Konyv from './Konyv';

describe('Book class', () => {
  it('should create a book without errors', () => {
    const book = new Konyv('Fullmetal Alchemist vol. 1', '1234567890');
    expect(book.toString()).toBe('Fullmetal Alchemist vol. 1 (1234567890)');
  });

  it('should only accept books with title', () => {
    expect(() => {
      new Konyv('', '1112223334');
    }).toThrow();
  });

  it('should only accept books with isbn', () => {
    expect(() => {
      new Konyv('One Piece vol. 879', '');
    }).toThrow();
  });

  it('should only accept valid isbn', () => {
    expect(() => {
      new Konyv('A Silent Voice vol. 1', '12345');
    }).toThrow();

    expect(() => {
      new Konyv('A Silent Voice vol. 2', '1234567890ABC');
    }).toThrow();
  });
});
