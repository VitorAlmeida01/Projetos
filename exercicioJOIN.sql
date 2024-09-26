CREATE DATABASE Sprint2;

USE Sprint2;

CREATE TABLE atleta (
	idAtleta INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(40),
    modalidade VARCHAR(40),
    qtdMedalha INT
);

-- opa

INSERT INTO atleta VALUES
	(DEFAULT, 'Vitor Almeida', 'Futebol', 5),
    (DEFAULT, 'Felipe Miguel', 'Futebol', 1),
    (DEFAULT, 'Jeroncio Almeida', 'Atletismo', 2),
    (DEFAULT, 'Carlos Santana', 'Natação', 3),
	(DEFAULT, 'Mariana Silva', 'Basquete', 4);

CREATE TABLE pais(
	idPais INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30),
    capital varchar(40)
);

INSERT INTO pais VALUES
	(DEFAULT, 'Brasil', 'Brasília'),
	(DEFAULT, 'Argentina', 'Buenos Aires'),
	(DEFAULT, 'Canadá', 'Ottawa'),
	(DEFAULT, 'Japão', 'Tóquio'),
	(DEFAULT, 'Alemanha', 'Berlim');
    
    