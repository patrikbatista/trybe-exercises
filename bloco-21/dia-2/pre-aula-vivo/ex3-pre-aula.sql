-- Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT customer.customer_id,
	CONCAT(customer.first_name, ' ', customer.last_name) AS customer,
    customer.email,
	address.address_id,
    address.address
FROM sakila.customer AS customer
INNER JOIN sakila.address AS address
ON customer.address_id = address.address_id
ORDER BY customer.first_name DESC
LIMIT 100;