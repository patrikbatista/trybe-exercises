-- Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
SELECT
	CONCAT(customer.first_name, ' ', customer.last_name) AS customer,
    customer.email,
	address.address_id,
    address.address,
    address.district
FROM sakila.customer AS customer
INNER JOIN sakila.address AS address
ON customer.address_id = address.address_id
WHERE address.district = 'California';