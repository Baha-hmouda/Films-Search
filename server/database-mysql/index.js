const { Sequelize, DataTypes } = require("sequelize");
const connection  = new Sequelize('dbfilm', 'root', 'Baha1998@', {
  host: 'localhost',
  dialect: "mysql",
});

async function testconnection() {
  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testconnection()
const db = {};
db.Film=require("./film")(connection, DataTypes)




 //connection.sync({ force: true }).then((response) => (response.data)).catch((err) => console.log(err))

module.exports = db;