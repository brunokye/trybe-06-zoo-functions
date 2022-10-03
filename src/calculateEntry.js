const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const filteredChild = entrants.filter(({ age }) => age < 18).length;
  const filteredAdult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const filteredSenior = entrants.filter(({ age }) => age >= 50).length;
  const stagesOfLife = {
    child: filteredChild,
    adult: filteredAdult,
    senior: filteredSenior,
  };

  return stagesOfLife;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;

  const priceChild = countEntrants(entrants).child * prices.child;
  const priceAdult = countEntrants(entrants).adult * prices.adult;
  const priceSenior = countEntrants(entrants).senior * prices.senior;
  const sum = priceChild + priceAdult + priceSenior;

  return sum;
}

module.exports = { calculateEntry, countEntrants };
