const dbConnnect = require("../DB/DataBase");

const insert = async (inserData) => {
  const db = await dbConnnect();
  const result = db.insertMany(inserData);
  console.log("insert data");
};

module.exports = insert;
