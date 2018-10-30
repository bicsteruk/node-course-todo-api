//const MongoClient = require('mongodb').MongoClient;
// creates variable called MongoClient which is set to the MongoClient
// variable of the parent - this is object destructuring
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


// object destructuring
// pulling out name property setting name property to value
var user = {name: 'Chris', age: 38};
var {name} = user;



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err){
        return console.log('Unable to connect to MongoDB server', err);
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     test: 'Something to do',
    //     completed: false
    // }, (err, res) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     // success code goes here
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    //     db.collection('Users').insertOne({
    //     name: 'Chris',
    //     age: 38,
    //     location: '513 Donlands Avenue, Toronto'
    // }, (err, res) => {
    //     if(err){
    //         return console.log('Unable to insert user', err);
    //     }

    //     // success code goes here
    //     console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    db.close();
});