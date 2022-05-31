-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT 
	sales.movie_id,
	movies.title,
	sales.domestic_sales,
    sales.international_sales
FROM Pixar.BoxOffice AS sales
INNER JOIN 
    Pixar.Movies AS movies ON movies.id = sales.movie_id