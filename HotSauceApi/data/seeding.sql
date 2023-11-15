-- Insertion d'utilisateurs
INSERT INTO "user" (firstname, lastname, email, address, password, birth_date, gender, profile_picture, profile_desc)
VALUES
    ('Pierre', 'Dupont', 'pierre.dupont@example.com', '123 Rue Principale', 'mdp123', '1988-05-12', 'Homme', 'photo1.jpg', 'Profil utilisateur.'),
    ('Marie', 'Lefevre', 'marie.lefevre@example.com', '456 Avenue des Fleurs', 'mdp456', '1992-09-25', 'Femme', 'photo2.jpg', 'Un autre profil utilisateur.'),
    ('Alexandre', 'Martin', 'alexandre.martin@example.com', '789 Boulevard du Soleil', 'mdp789', '1985-03-18', 'Homme', 'photo3.jpg', 'Encore un autre profil utilisateur.');

-- Insertion de sauces
INSERT INTO SAUCE (note_id, spicyness, name, description, country, brand, picture)
VALUES
    (1, 3, 'Sauce Epicée 1', 'Une délicieuse sauce épicée.', 'France', 'Marque A', 'sauce1.jpg'),
    (2, 4, 'Sauce Piquante 2', 'Une sauce piquante et savoureuse.', 'Mexique', 'Marque B', 'sauce2.jpg'),
    (3, 2, 'Sauce Douce 3', 'Une sauce douce et parfumée.', 'Canada', 'Marque C', 'sauce3.jpg'),
    (1, 5, 'Sauce Extra Forte 4', 'La sauce la plus épicée que vous ayez jamais goûtée.', 'USA', 'Marque D', 'sauce4.jpg'),
    (2, 3, 'Sauce Médium 5', 'Une sauce au niveau de piquant moyen.', 'Italie', 'Marque E', 'sauce5.jpg');

-- Insertion de notes
INSERT INTO NOTE (note, user_id, sauce_id)
VALUES
    (5, 1, 1),
    (4, 2, 2),
    (3, 3, 3),
    (5, 1, 4),
    (4, 2, 5);

-- Insertion de commentaires sur les sauces
INSERT INTO SAUCE_COMMENT (sauce_id, user_id, comment_text, created_at)
VALUES
    (1, 2, 'Super sauce ! J\'ai adoré le piquant.', '2023-01-15 10:30:00'),
    (2, 3, 'Piquante mais savoureuse. Parfaite pour les tacos.', '2023-02-20 12:45:00'),
    (3, 1, 'Douce et parfumée. Va bien avec le poulet.', '2023-03-10 15:20:00'),
    (4, 2, 'Extrêmement épicée ! À déguster avec précaution.', '2023-03-25 18:10:00'),
    (5, 3, 'Juste le bon niveau de piquant. Idéale pour les pâtes.', '2023-04-05 14:30:00');
