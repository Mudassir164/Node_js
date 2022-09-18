const dbConnnect = require("../DB/DataBase");

const updateData = async function (Id, updatedData) {
  const db = await dbConnnect();
  const result = await db.updateOne(
    {
      _id: Id,
    },
    {
      $set: updatedData,
    }
  );
  console.log(result);
};

module.exports = updateData;
