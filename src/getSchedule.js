const data = require('../data/zoo_data');

const { species, hours } = data;
const weekDays = Object.keys(hours);
const animals = species.map(({ name }) => name);
const monday = {
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

function animalParam(search) {
  if (animals.includes(search)) {
    const filteredAnimal = species.filter((obj) => obj.name === search);
    const [days] = filteredAnimal.map((animal) => animal.availability);

    return days;
  }
}

function getExhibition(day) {
  const filteredDays = species.filter((obj) => obj.availability.includes(day));
  return filteredDays.map((animal) => animal.name);
}

function dayParam(search) {
  if (search === 'Monday') return monday;
  const newObj = {};
  const { open, close } = hours[search];

  newObj[search] = {
    officeHour: `Open from ${open}am until ${close}pm`,
    exhibition: getExhibition(search),
  };

  return newObj;
}

function noParam() {
  const newObj = {};

  weekDays.forEach((day) => {
    Object.assign(newObj, dayParam(day));
  });

  return newObj;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) return noParam();
  if (!(weekDays.includes(scheduleTarget)) && !(animals.includes(scheduleTarget))) return noParam();
  if (animals.includes(scheduleTarget)) return animalParam(scheduleTarget);

  return dayParam(scheduleTarget);
}

module.exports = getSchedule;
