const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//connection URL
const url = 'mongodb://localhost:27017';

//database name
const dbName = 'fruitsDB';

//create a new MongoClient
const client = new MongoClient(url,{ useUnifiedTopology: true });

//use connect method to connect to server
client.connect(function(err) {
    assert.equal(null,err);
    console.log("Connected successfully to the server");

    const db=client.db(dbName);

    findDocuments(db, function() {
        client.close();
    });
});

const insertDocuments = function(db,callback) {
    //get the document collection
    const collection = db.collection('fruits');
    //insert some document
    collection.insertMany([
        {
            name: "Apple",
            score: 8,
            review: "Great fruit"
        },
        {
            name: "Orange",
            score: 6,
            review: "Kinda sour"
        },
        {
            name: "Banana",
            score: 9,
            review: "Great stuff!"
        }
    ], function(err,result) {
        assert.equal(err,null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}

const findDocuments = function(db,callback) {
    //get the document collection
    const collection = db.collection('fruits');
    //find some documents
    collection.find({}).toArray(function(err,fruits) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits);
        callback(fruits);
    });
};