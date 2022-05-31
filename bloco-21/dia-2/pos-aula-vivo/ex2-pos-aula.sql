-- Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT 
	sales.movie_id,
	movies.title,
	sales.domestic_sales,
    sales.international_sales
FROM Pixar.BoxOffice AS sales
INNER JOIN 
    Pixar.Movies AS movies ON movies.id = sales.movie_id
WHERE 
	sales.international_sales > sales.domestic_sales;