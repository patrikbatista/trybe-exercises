-- A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
SELECT AVG(length) AS media_duracao FROM sakila.film;

-- A duração mínima dos filmes como 'Duração Mínima';
SELECT MIN(length) FROM sakila.film;

-- A duração máxima dos filmes como 'Duração Máxima';
SELECT MAX(length) FROM sakila.film;

-- A soma de todas as durações como 'Tempo de Exibição Total';
SELECT SUM(length) FROM sakila.film;

-- E, finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
SELECT SUM(length) FROM sakila.film;
SELECT COUNT(*) AS quantide_total_filmes FROM sakila.film;