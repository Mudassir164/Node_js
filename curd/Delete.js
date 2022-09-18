const dbConnnect = require("../DB/DataBase");

const deleteData = async (name) => {
  const db = await dbConnnect();
  const result = await db.deleteOne({ name: name });
  console.log(result);
};

module.exports = deleteData;
