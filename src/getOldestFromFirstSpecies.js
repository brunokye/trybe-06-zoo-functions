const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const filteredId = employees.find((obj) => obj.id === id);
  const findAnimal = species.find((animal) => animal.id === filteredId.responsibleFor[0]);
  const oldestAnimal = findAnimal.residents.reduce((a, b) => {
    if (a.age > b.age) return a;
    return b;
  });

  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
