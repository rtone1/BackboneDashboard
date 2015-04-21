psql

CREATE DATABASE dash_board;
\c dash_board;

CREATE TABLE cards (id SERIAL PRIMARY KEY, title VARCHAR(255), message TEXT);
