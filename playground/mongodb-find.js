// const mongodb = require('mongodb');
// const ObjectID = mongodb.ObjectID;
// const MongoClient = mongodb.MongoClient;
// creates variable called MongoClient which is set to the MongoClient
// variable of the parent - this is object destructuring
const {
    MongoClient,
    ObjectID
} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


// object destructuring
// pulling out name property setting name property to value
var user = {
    name: 'Chris',
    age: 38
};
var {
    name
} = user;



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5bd7332d03ab046f67e025c7')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    db.collection('Users').find({
        name: 'Chris'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Todos', err);
    });


    //db.close();
});