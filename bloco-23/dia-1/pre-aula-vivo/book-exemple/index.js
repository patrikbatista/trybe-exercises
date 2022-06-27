const express = require('express');

const app = express();

const Book = require('./models/Book');
const Author = require('./models/Author');

app.get('/author', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

app.get('/books', async (_req, res) => {
	const books = await Book.getAll();

	res.status(200).json(books);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});