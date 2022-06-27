const express = require('express');

const app = express();

const Book = require('./models/Book');


app.get('/books', async (_req, res) => {
	const book = await Book.getAll();

	res.status(200).json(book);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});