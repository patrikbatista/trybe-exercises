-- Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT 
	sales.movie_id,
	movies.title,
	sales.rating
FROM Pixar.BoxOffice AS sales
INNER JOIN 
    Pixar.Movies AS movies ON movies.id = sales.movie_id
ORDER BY movies.title DESC;