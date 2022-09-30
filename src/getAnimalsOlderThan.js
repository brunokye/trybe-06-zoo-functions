const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  let verifier = '';

  species.filter((element) => {
    if (element.name === animal) {
      verifier = element.residents;
    }

    return verifier;
  });

  return verifier.every((number) => number.age >= age);
}

module.exports = getAnimalsOlderThan;
