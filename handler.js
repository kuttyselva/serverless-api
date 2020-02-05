"use strict";
const sequelize = require("./models/Db");
const User = sequelize.import("./models/User");
module.exports.hello = async event => {
  const users = await User.findAll({raw: true });
    return {
      statusCode: 200,
      body: JSON.stringify(users)
    };
};

// patient data retirval endpoint
// endpoint = /api/patient/all 
// method = get

module.exports.patients = async event => {
  const patients = await User.findAll({ where: { fk_role_id: 1 }, raw: true });
    return {
      statusCode: 200,
      body: JSON.stringify(patients)
    };
};

// doctor data retirval endpoint
// endpoint = /api/doctor/all 
// method = get

module.exports.doctors = async event => {
  const doctors = await User.findAll({ where: { fk_role_id: 2 }, raw: true });
    return {
      statusCode: 200,
      body: JSON.stringify(doctors)
    };
};
