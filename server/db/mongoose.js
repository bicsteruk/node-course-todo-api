const mongoose = require('mongoose');

// set Mongoose up to use promises
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

// export the mongoose variable
module.exports = {
    mongoose
}