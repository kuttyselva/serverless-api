const HospitalDAO = require("../data/HospitalData");
const response = {
  statusCode: null,
  body: ""
};
//get all patients service
exports.getAllPatients = async () => {
  try {
    const patients = await HospitalDAO.getPatientData();
    if (patients.length < 1) {
      response.statusCode = 404;
      response.body = "no data found";
    } else {
      response.statusCode = 200;
      response.body = JSON.stringify(patients);
    }
  } catch (err) {
    response.statusCode = 500;
    response.body = "Server error";
  }
  return response;

};
