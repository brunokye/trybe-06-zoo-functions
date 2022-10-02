const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('argumento count retorna 4', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });

  it('argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    const actual = handlerElephants('names');
    const expected = 'Jefferson';
    expect(actual).toContain(expected);
  });

  it('argumento averageAge deve retornar um número próximo a 10.5', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBeCloseTo(expected);
  });
});
