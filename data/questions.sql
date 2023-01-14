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

INSERT INTO "questions" VALUES (1, 'Máte rádi softball?', 'Ano', '<strong>Hodně ano</strong>',
 '<div style="color: blue;">Ano v barvách</div>', 'Ne', true, 'abc', now(), now(), 'seckar', true);
INSERT INTO "questions" VALUES (2, 'Umíte zapisovat?', 'Ano', 'Ne', '<div style="color: green;">Ne v barvách</div>',
 '<img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/No-Symbol.png" style="height: 50px;">',
 false, 'a', now(), now(), 'seckar', true);

-- NOTE: those are only a few sample questions - production DB has more

COMMIT;