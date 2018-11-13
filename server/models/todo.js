var mongoose = require('mongoose');

// create a Mongoose model for everything we want to store
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true // removes leading or trailing whitespace
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Date,
        default: null
    }
});

module.exports = {Todo};