const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('retorna todos os dias e horários caso nenhum parâmetro seja passado', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });

  it('retorna \'The zoo is closed\' para Monday 09:00-AM', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });

  it('retorna \'The zoo is open\' para Tuesday 09:00-AM', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toBe(expected);
  });

  it('retorna \'The zoo is closed\' para Wednesday 09:00-PM', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });

  it('retorna \'The day must be valid. Example: Monday\' para Thu 09:00-AM', () => {
    const actual = () => getOpeningHours('Thu', '09:00-AM');
    const expected = 'The day must be valid. Example: Monday';
    expect(actual).toThrow(expected);
  });

  it('retorna \'The abbreviation must be \'AM\' or \'PM\'\' para Friday 09:00-ZM', () => {
    const actual = () => getOpeningHours('Friday', '09:00-ZM');
    const expected = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(actual).toThrow(expected);
  });

  it('retorna \'The hour should represent a number\' para Saturday C9:00-AM', () => {
    const actual = () => getOpeningHours('Saturday', 'C9:00-AM');
    const expected = 'The hour should represent a number';
    expect(actual).toThrow(expected);
  });

  it('retorna \'The hour must be between 0 and 12\' para Monday 13:00-AM', () => {
    const actual = () => getOpeningHours('Monday', '13:00-AM');
    const expected = 'The hour must be between 0 and 12';
    expect(actual).toThrow(expected);
  });

  it('retorna \'The minutes must be between 0 and 59\' para Tuesday 09:60-AM', () => {
    const actual = () => getOpeningHours('Tuesday', '09:60-AM');
    const expected = 'The minutes must be between 0 and 59';
    expect(actual).toThrow(expected);
  });
});
