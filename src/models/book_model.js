//Book structure
const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
  
  book: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  gender: {
    type: Array,
    require: true,
  },
  editorial: {
    type: String,
    require: true,
  },
  edition: {
    type: Number,
    require: true,
  },
  available_libraries: {
    type: Array,
    require: true,
    library_name: {
      type: String,
      require: true,
    },
    address: {
      type: Array,
      require: true,
      lat: {
        type: Number,
        require: true,
      },
      long: {
        type: Number,
        require: true,
      },
    },
  },
});

module.exports = mongoose.model('BookCollection', bookSchema);
