BEGIN;

DROP TABLE IF EXISTS tech CASCADE;

CREATE TABLE tech (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    language TEXT,
    author VARCHAR(100),
    rating BOOLEAN
);

INSERT INTO tech (name, description, language, author, rating) VALUES
    ('Tape', 'A testing framework', null, 'Kristina', false),
    ('Node.Js', 'Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.', 'Javascript', 'Sak', true);

COMMIT;