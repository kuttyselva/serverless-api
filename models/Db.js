const Sequelize = require("sequelize");
const sequelizeConnection = new Sequelize("mysql://root:root@localhost:3306/mydb");
module.exports = sequelizeConnection;
