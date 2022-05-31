SELECT 
	theater.id,
    theater.name,
    theater.location,
    movies.title
FROM 
	Pixar.Theater AS theater
LEFT JOIN 
	Pixar.Movies AS movies ON theater.id = movies.theater_id
ORDER BY theater.name;