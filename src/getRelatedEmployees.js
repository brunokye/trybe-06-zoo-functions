const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((obj) => obj.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const filteredArray = employees.filter((obj) => obj.managers.includes(managerId));

    return filteredArray.map((worker) => `${worker.firstName} ${worker.lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
