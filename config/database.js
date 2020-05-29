
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://daniel:HMad5MWwOEdBzKhw%40sdadf9209@cluster0-sxrjq.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useUnifiedTopology: true});

client.connect().then((client)=>{
    var db = client.db('MYDB');
    console.log ('Retrieving data');

    db.collection('products').find().toArray(function (err, result) {
        if (err) throw err
        console.log(result);
    });
});

console.log('Finished');