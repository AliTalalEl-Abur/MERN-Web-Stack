const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// crear schema para todo
const TodoSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The todo text field is required']
  }
});

// crear modelo para todo
const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;
