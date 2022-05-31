-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
SELECT
	CONCAT(customer.first_name, ' ', customer.last_name) AS customer,
    COUNT(address.address)
FROM sakila.customer AS customer
INNER JOIN sakila.address AS address
ON customer.address_id = address.address_id
WHERE customer.active = 1
GROUP BY customer.customer_id
ORDER BY 
	customer.first_name DESC,
    customer.last_name DESC;