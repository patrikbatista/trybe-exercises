SELECT 
	film_id,
    title,
    CASE
		WHEN title = 'ACE GOLDFINGER' THEN 'Já assisti esse filme'
        ELSE 'Não conheço o filme'
	END AS conheco_o_filme
FROM sakila.film;