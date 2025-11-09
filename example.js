CREATE DATABASE customer_db;
USE customer_db;

CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name   VARCHAR(100) NOT NULL,
    email       VARCHAR(120) UNIQUE NOT NULL,
    phone       VARCHAR(20),
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO customers (full_name, email, phone)
VALUES
('Santhosh Kumar', 'santhosh@example.com', '9876543210'),
('Harish MS',      'harish@example.com',   '9123456780'),
('Kiran Gowda',    'kiran@example.com',    '9988776655');

SELECT * FROM customers;

SELECT * FROM customers WHERE email = 'santhosh@example.com';

SELECT * FROM customers ORDER BY created_at DESC;

UPDATE customers
SET phone = '9008007006'
WHERE customer_id = 1;

UPDATE customers
SET full_name = 'Santhosh K', phone = '9999991111'
WHERE email = 'santhosh@example.com';

DELETE FROM customers
WHERE customer_id = 3;

DELETE FROM customers
WHERE email = 'harish@example.com';

TRUNCATE TABLE customers;

DROP TABLE customers;

DROP DATABASE customer_db;
