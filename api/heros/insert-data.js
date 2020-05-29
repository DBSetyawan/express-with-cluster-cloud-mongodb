const { MongoClient } = require("mongodb");
 
const url = "mongodb+srv://daniel:asdasdasjdh7324%28k@cluster0-sxrjq.mongodb.net/sample_airbnb?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
 
 const dbName = "test";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         const col = db.collection("people");

         let personDocument = {
             "name": { "first": "Alan", "last": "Turing" },
             "birth": new Date(1912, 5, 23), // juni 23, 1912                                                                                                                                 
             "death": new Date(1954, 5, 7),  // jni 7, 1954                                                                                                                                  
             "contribs": [ "Turing machine", "Turing test", "Turingery" ],
             "views": 1250000
         }

         const p = await col.insertOne(personDocument);
         const myDoc = await col.findOne();
         console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);