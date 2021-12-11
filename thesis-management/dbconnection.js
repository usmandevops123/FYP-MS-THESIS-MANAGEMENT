var MongoClient = require("mongodb").MongoClient;
var url = process.env.MONGO_DB_URI;

export const dbConnection = () => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  });
};
