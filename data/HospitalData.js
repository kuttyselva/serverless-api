"use strict";
const sequelize = require("../config/Db");
const User = sequelize.import("../models/User");
//get all patients from sqldb
exports.getPatientData = () =>{
    const users = User.findAll({ where: { fk_role_id: 1 }, raw: true });
    return users;
}

exports.getDoctorData = () =>{
    const doctors = User.findAll({ where: { fk_role_id: 2 }, raw: true });
    return doctors;
}