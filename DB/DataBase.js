const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "node-mongo";
const client = new MongoClient(url);

const dbConnnect = async () => {
  let result = await client.connect();

  //get Data Base
  let db = result.db(dbName);

  // get collection
  let collection = db.collection("product");
  return collection;
};

module.exports = dbConnnect;
