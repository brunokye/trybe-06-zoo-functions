const data = require('../data/zoo_data');

const { employees } = data;

const getAllInfo = (info) => {
  let newObj = {};
  const { id } = info;
  const fullName = `${info.firstName} ${info.lastName}`;

  newObj = { id, fullName };

  return newObj;
};

function getEmployeesCoverage(employeeInfo) {
  const { id: code, name: worker } = employeeInfo;

  if (code === undefined && worker === undefined) return getAllInfo(employees);
  // if (code === undefined);
  // if (worker === undefined);
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
