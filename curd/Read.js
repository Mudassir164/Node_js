const dbConnnect = require("../DB/DataBase");

const readData = async () => {
  const result = await dbConnnect();
  const data = await result.find({}).toArray();
  console.log(data);
};

module.exports = readData;
