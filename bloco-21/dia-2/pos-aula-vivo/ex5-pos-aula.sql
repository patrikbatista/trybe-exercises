-- Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
	theater.id,
    theater.name,
    theater.location,
    movies.title
FROM 
	Pixar.Theater AS theater
RIGHT JOIN
	Pixar.Movies AS movies ON theater.id = movies.theater_id
ORDER BY theater.name;