BEGIN;

-- Supprimer les tables "SAUCE_COMMENT", "SAUCE", et "user" avec CASCADE
DROP TABLE IF EXISTS SAUCE_COMMENT, SAUCE, "user" CASCADE;

-- Recréer la table "user"
CREATE TABLE "user" (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
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

-- Recréer la table "SAUCE"
CREATE TABLE SAUCE (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    spicyness INTEGER NOT NULL,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    country TEXT,
    brand TEXT,
    picture TEXT
);

-- Recréer la table "SAUCE_COMMENT"
CREATE TABLE SAUCE_COMMENT (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    sauce_id INT REFERENCES SAUCE(id) ON DELETE CASCADE,
    user_id INT REFERENCES "user"(id),
    comment_text TEXT NOT NULL,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP
);

COMMIT;
