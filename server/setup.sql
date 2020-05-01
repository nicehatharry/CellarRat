CREATE DATABASE CellarRat;

CREATE TABLE WineCellar (
    wine_id SERIAL PRIMARY KEY,
    label NVARCHAR(72),
    color NVARCHAR(12),
    qty TINYINT
    );