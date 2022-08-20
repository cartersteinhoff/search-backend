DROP TABLE posts IF EXISTS;

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    post_title VARCHAR(50) NOT NULL
    post_content VARCHAR(1000) NOT NULL,
);


