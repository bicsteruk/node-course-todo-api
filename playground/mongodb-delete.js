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

    // delete many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // delete one
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // find one and delete
    db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
        console.log(result);
    });

    // difference between find one and delete and delete one?
    

    //db.close();
});