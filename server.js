
const { MongoClient } = require('mongodb');
const ObjectID = require('mongodb').ObjectID;
// ObjectId = require('mongodb').ObjectID;
// const BSON = require('bson').BSONPure;
// https://docs.atlas.mongodb.com/data-explorer/#access-data-explorer
// http://mongodb.github.io/node-mongodb-native/3.5/tutorials/crud/
// https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html
// cloud.mongodb.com
function MyObject()
{
    this.Title = "";
    this.Content = "";
}
const uri = "mongodb+srv://daniel:asdasdasjdh7324%28k@cluster0-sxrjq.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
client.connect(err => {
  const obj_id = new ObjectID('5ed0c9ced13022141c2b6b75');

  // var obj_id = MongoClient.BSONPure.ObjectId.createFromHexString('5ed0c9ced13022141c2b6b75');
  const db = client.db("test")
  db.collection('people', function(error, collection) {
  // function(err, res) {
    collection.findOne( {_id:`${obj_id}`} , function(err, item) {
      console.log ( item );
  });
    // var locFriends = [];
    // console.log(Object.assign({}, err))
    // var friendsP = item.friends;
    // promise(locFriends, res);
    // var x = 0;
    // for(i =0; i<friendsP.length; i++)
    // {
    //   db.collection('people').findOne({"_id" : friendsP[i]}, function(err,subItem){
    //     x=x+1;
    //     //console.log(subItem);
    //     locFriends.push(subItem);
    //     if(x==friendsP.length)
    //       client.close();

    //     });
    // }
  });
  // const col = db.collection('find');
  // perform actions on the collection object
  // console.log(collection.s)
  // client.close();
});