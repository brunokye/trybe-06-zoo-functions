const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(param) {
  if (param === undefined) {
    const newObj = {};

    species.forEach(({ name, residents }) => { newObj[name] = residents.length; });
    // species.forEach(({ name, residents }) => { Object.assign(newObj, { [name]: residents.length }); });

    return newObj;
  }

  const { specie: animal, sex: gender = undefined } = param;
  const filteredAnimal = species.find((obj) => obj.name === animal);

  if (gender === undefined) return filteredAnimal.residents.length;

  const filteredSex = filteredAnimal.residents.filter((arr) => arr.sex === gender);
  return filteredSex.length;
}

module.exports = countAnimals;
