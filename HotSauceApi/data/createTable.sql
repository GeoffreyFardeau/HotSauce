-- SQLBook: Code
BEGIN;

DROP TABLE IF EXISTS "user", SAUCE, NOTE;
-- table USER
CREATE TABLE "user" (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL,
    address TEXT,
    password TEXT NOT NULL,
    birth_date timestamp,
    gender TEXT,
    profile_picture TEXT,
    profile_desc TEXT
    );

    CREATE TABLE SAUCE (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    note_id INT,
    spicyness INTEGER NOT NULL,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    country TEXT,
    brand TEXT,
    picture TEXT
        );


-- table USERCHOICE 
CREATE TABLE NOTE (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    note INTEGER NOT NULL,
    user_id INT REFERENCES "user"(id),
    sauce_id INT REFERENCES SAUCE(id)
    );



COMMIT;
