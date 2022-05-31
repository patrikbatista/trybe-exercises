-- Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(salary) FROM hr.employees;

-- Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT (MAX(salary) - MIN(salary)) AS diferenca_salario
FROM hr.employees;

-- Escreva uma query que exiba a média salarial de cada JOB_ID, ordenando pela média salarial em ordem decrescente.
SELECT job_id, AVG(salary) AS media_salarial
FROM hr.employees
GROUP BY job_id
ORDER BY media_salarial DESC;

-- Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(SALARY) AS TOTAL_PAGAMENTO FROM hr.employees;

-- Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT 
	ROUND(MAX(SALARY),2),
	ROUND(MIN(SALARY),2),
	ROUND(SUM(SALARY),2),
	ROUND(AVG(SALARY),2)
FROM hr.employees;

--  Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (IT_PROG).
SELECT JOB_ID, COUNT(*) AS TOTAL 
FROM hr.employees
WHERE JOB_ID = "IT_PROG"; 

-- Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (JOB_ID).
SELECT JOB_ID, SUM(SALARY) AS GASTO_TOTAL
FROM hr.employees
WHERE JOB_ID = "IT_PROG"; 
-- outra forma de fazer usando group by e having
SELECT JOB_ID, SUM(SALARY)
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = "IT_PROG";

-- Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (IT_PROG).
SELECT JOB_ID, ROUND((AVG(SALARY)),2) AS MEDIA_SALARIAL
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> "IT_PROG"
ORDER BY MEDIA_SALARIAL DESC;
-- outra forma
SELECT job_id, AVG(salary) 'average_salary'
FROM hr.employees
WHERE job_id <> 'IT_PROG'
GROUP BY job_id
ORDER BY `average_salary` DESC;

-- Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo DEPARTMENT_ID.
 SELECT 
	DEPARTMENT_ID, 
    ROUND((AVG(SALARY)),2) AS MEDIA_SALARIAL,
    COUNT(*) AS TOTAL_FUNCIONARIOS
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING DEPARTMENT_ID > 10
ORDER BY MEDIA_SALARIAL DESC;

-- Escreva uma query que atualize a coluna PHONE_NUMBER, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.
SELECT 
	REPLACE(PHONE_NUMBER, '515', '777') 
FROM hr.employees;

-- Se o modo "safe mode" do MySQL estiver habilitado,
-- o MySQL não executa UPDATE ou DELETE sem uma
-- instrução WHERE que não inclua uma PRIMARY KEY.
-- Podemos desabilitar o "safe mode" com:
-- SET SQL_SAFE_UPDATES = 0;
-- e depois das modificações o habilitarmos novamente com:
-- SET SQL_SAFE_UPDATES = 1;
SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SET SQL_SAFE_UPDATES = 1;

-- Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT *
FROM 
	hr.employees
WHERE 
	length(FIRST_NAME) >= 8;
    
-- Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT EMPLOYEE_ID, FIRST_NAME,
    YEAR(HIRE_DATE) AS ANO
FROM 
	hr.employees;
    
-- Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT EMPLOYEE_ID, FIRST_NAME,
    SUBSTRING(HIRE_DATE, 9, 2) AS DIA
FROM 
	hr.employees;

-- Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT EMPLOYEE_ID, FIRST_NAME,
    SUBSTRING(HIRE_DATE, 6, 2) AS DIA
FROM 
	hr.employees;

-- Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT UCASE(CONCAT(FIRST_NAME, ' ', LAST_NAME)) AS FULL_NAME FROM hr.employees;
    
-- Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT FIRST_NAME, HIRE_DATE
FROM hr.employees
WHERE SUBSTRING(HIRE_DATE, 1, 7) = '1987-07';

-- Outras formas de fazer o exercicio
SELECT LAST_NAME _NAME, HIRE_DATE
FROM hr.employees
WHERE HIRE_DATE  BETWEEN '1987-07-01'  AND '1987-07-31';

SELECT LAST_NAME _NAME, HIRE_DATE
FROM hr.employees
WHERE MONTH(HIRE_DATE)=7 and YEAR(HIRE_DATE)=1987;

-- Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).
SELECT 
	FIRST_NAME, 
    LAST_NAME,
    DATEDIFF(CURRENT_DATE(), HIRE_DATE) AS TEMPO_EMPRESA
FROM hr.employees;

    




