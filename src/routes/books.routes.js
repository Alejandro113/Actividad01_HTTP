const express = require('express');
const book_route = express.Router();
const bookSchema = require('../models/book_model');


book_route.post('/book', (req, res) => {
  const book = bookSchema(req.body);
  book
    .save()
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

//route to list books
//EndPoint : http://localhost:5000/api/v1/books
book_route.get('/', (req, res) => {
  bookSchema
  .find()
  .then((data) => res.json({ message: data }))
  .catch((error) => res.json({ message: error }));
});

//route to list an specific book
book_route.get('/:bookId', (req, res) => {
  const { bookId } = req.params;
  bookSchema
    .findById(bookId)
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});



//route to edit books
//Enpoint :http://localhost:5000/api/v1/books/
book_route.put('/:bookId', (req, res) => {
  const { bookId } = req.params;
  const peopleBody = req.body;
  bookSchema
    .updateOne({ _id: bookId, $set: peopleBody})
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});

//route to delete books
//Enpoint :http://localhost:5000/api/v1/books/
book_route.delete('/:bookId', (req, res) => {
  const { bookId } = req.params;
  bookSchema
    .remove({ _id: bookId })
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
});
module.exports = book_route;
