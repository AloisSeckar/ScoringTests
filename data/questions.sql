-- DB scheme for ScoringTests 1.0
-- syntax is valid for PostgreSQL
-- last revision: 2023-01-14

BEGIN TRANSACTION;

DROP TABLE IF EXISTS "questions";
CREATE TABLE "questions" (
	"id"   SERIAL PRIMARY KEY,
	"question"  varchar(1000) NOT NULL,
	"answer1"	varchar(255) NOT NULL,
	"answer2"	varchar(255) NOT NULL,
	"answer3"	varchar(255) NOT NULL,
	"answer4"	varchar(255) NOT NULL,
	"multiple"	boolean NOT NULL,
	"solution"	varchar(4) NOT NULL,
	"created"	timestamp NOT NULL,
	"edited"	timestamp NOT NULL,
	"author"	varchar(25) NOT NULL,
	"valid"  boolean NOT NULL
);

-- NOTE: those are only a few sample questions - production DB has more

INSERT INTO "questions" VALUES (1, 'Pálkař odpálí míč do zadního pole. CF míč sebere a přihodí na druhou metu, kde SS hraje nucený aut běžce z 1. mety. Co platí o výsledku rozehry?',
 'Pálkař má hit', 'Běžec je aut 86', 'Běžec je nucený aut', 'Pálkař má volbu v obraně (O8)', true, 'bcd', now(), now(), 'seckar', true);
INSERT INTO "questions" VALUES (2, 'Není nadhoz, rozhodčí zvedne ruku se 4 prsty a ukáže na 1. metu. Pálkař na ni odchází. Co nastalo za situaci?',
 'Meta zdarma (BB)', 'Úmyslná meta zdarma (IBB)', 'Trefení nadhozem (HP)', 'Překážení catchera (INT)', false, 'b', now(), now(), 'seckar', true);
INSERT INTO "questions" VALUES (3, 'Míč byl prudce odpálen do země, projel mezi postavením 3B a SS a pokračoval na trávu, kde ho sebral LF. Jaká je nejvhodnější specifikace umístění odpalu?',
 '7', 'LL', 'LS', 'LC', false, 'c', now(), now(), 'seckar', true);
 INSERT INTO "questions" VALUES (4, 'První hráč v lineupu je na 1. metě, druhý v pořadí na pálce. Nadhazovač nadhodil míč do země, který projel catcherovi mezi nohama. Než ho catcher u backstopu dostihl, běžec posoupil na 2. metu. Co platí o výsledku rozehry?',
 'Je to passed-ball, protože catcher má takové míče chytat.', 'Je to wild-pitch, protože nadhazovač nemá házet do země.', 
 'Ve scoresheetu bude u postupu na 2. metu číslo 2, protože je na pálce druhý hráč lineupu', 'Ve scoresheetu bude u postupu na 2. metu číslo 1, protože postoupil první hráč lineupu', true, 'bc', now(), now(), 'seckar', true);
INSERT INTO "questions" VALUES (5, 'Které z následujících variant zápisu chyby do scoresheetu jsou možné?',
 'E6T', 'e4', 'E7F', 'E5 DF', true, 'abcd', now(), now(), 'seckar', true);

-- NOTE: those are only a few sample questions - production DB has more

COMMIT;