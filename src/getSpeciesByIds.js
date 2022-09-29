const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  // return species.filter((element) => ids.includes(element.id));
  return species.filter((element) => ids.find((param) => element.id === param));
}

module.exports = getSpeciesByIds;
