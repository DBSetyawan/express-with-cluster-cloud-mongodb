
const MongoClient = require('mongodb').MongoClient;

// https://docs.atlas.mongodb.com/data-explorer/#access-data-explorer
// cloud.mongodb.com
const uri = "mongodb+srv://daniel:asdasdasjdh7324%28k@cluster0-sxrjq.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("sample_airbnb").collection("listingsAndReviews");
  // perform actions on the collection object
  console.log(collection)
  client.close();
});
