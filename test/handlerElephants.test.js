const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna undefined caso nenhum parâmetro seja passado', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toBe(expected);
  });

  it('retorna mensagem de erro caso o parâmetro não seja uma string', () => {
    const actual = handlerElephants(1);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toBe(expected);
  });

  it('retorna chave do parâmetro em relação ao objeto elephants', () => {
    const actual = handlerElephants('id');
    const expected = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
    expect(actual).toBe(expected);
  });

  it('retorna 4, parâmetro count', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });

  it('retorna um array de nomes que inclui o nome Jefferson, parâmetro names', () => {
    const actual = handlerElephants('names');
    const expected = 'Jefferson';
    expect(actual).toContain(expected);
  });

  it('retorna um número próximo a 10.5, parâmetro averageAge', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBeCloseTo(expected);
  });

  it('retorna null caso o param seja uma string inválida', () => {
    const actual = handlerElephants('test');
    const expected = null;
    expect(actual).toEqual(expected);
  });
});
