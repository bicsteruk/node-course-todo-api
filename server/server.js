var express = require('express');
var bodyParser = require('body-parser');

// local variable called mongoose set to mongoose from file
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');


var app = express();

// configure express middleware
app.use(bodyParser.json());

// read todos
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    },(e) => {
        res.status(400).send(e);

    });
});

// get todos


app.listen(3000, ()=> {
    console.log('Started on port 3000');
});


module.exports = {app};


// create a brand new todo
// var newTodo = new Todo({text: 'Go to gym', completed: true});

// // need to update MongoDB
// newTodo.save().then((doc) => {
//     console.log('Saved Todo', doc);
// }, (e) => {
//     console.log('Unable to save Todo', e);
// });

// var newUser = new User({email: 'chris@chrisbeech.com'});

// newUser.save().then((doc) => {
//     console.log('Saved User', doc);
// }, (e) => {
//     console.log('Unabled to save User', e);
// });

