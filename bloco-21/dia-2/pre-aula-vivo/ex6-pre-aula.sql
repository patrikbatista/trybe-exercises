SELECT 
	CONCAT(staff.first_name, ' ', staff.last_name),
    AVG(pay.amount) AS media_pagamento
FROM sakila.staff AS staff
INNER JOIN sakila.payment AS pay
ON staff.staff_id = pay.staff_id 	
WHERE
	YEAR(pay.payment_date) = 2006
GROUP BY staff.staff_id;