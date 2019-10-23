DROP TABLE IF EXISTS TB_HEROIS;
CREATE TABLE TB_HEROIS (
     ID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
     NOME  TEXT  NOT NULL,
     PODER TEXT  NOT NULL
)
-- Create
INSERT INTO TB_HEROIS(NOME, PODER)
VALUES
     ('Flash','Velecidade'),
     ('Batman', 'Rico')
--Read
SELECT * FROM TB_HEROIS;
SELECT * FROM TB_HEROIS WHERE NOME='Flash'; 

-- Update
UPDATE TB_HEROIS
SET NOME='Goku', PODER='KI'
WHERE ID=1

-- delete
DELETE FROM TB_HEROIS WHERE ID=2;