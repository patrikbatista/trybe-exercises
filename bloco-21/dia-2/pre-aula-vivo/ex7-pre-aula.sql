-- Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT act.actor_id, 
	CONCAT(act.first_name, ' ', act.last_name) AS actor_name, 
    f.film_id,
    film.title
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS f
ON act.actor_id = f.actor_id
INNER JOIN sakila.film AS film
ON film.film_id = f.film_id;
