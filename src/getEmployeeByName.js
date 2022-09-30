const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((obj) => obj.firstName === employeeName || obj.lastName === employeeName);
}

module.exports = getEmployeeByName;
