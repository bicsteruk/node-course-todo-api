// creates variable called MongoClient and which is set to the MongoClient
// variable of the parent - this is object destructuring
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }

    console.log('Connected to MongoDB server');

    // find one and update (filter, update, options, callback)
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5bd861d538b782ed4683d53b')
    }, {
        $set: { // this is an update operator
            completed: false
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});