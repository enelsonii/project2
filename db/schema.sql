CREATE DATABASE quiz_db;

USE quiz_db;

CREATE TABLE questions (
	id INT NOT NULL AUTO_INCREMENT,
	question VARCHAR(255) NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE answers (
    id INT NOT NULL AUTO_INCREMENT,
    answer VARCHAR(255) NOT NULL,
    question_id INT NOT NULL,
    is_correct BOOLEAN,
    FOREIGN KEY (question_id) REFERENCES questions(id),
    PRIMARY KEY (id)
);

CREATE TABLE user_answers (
	id INT NOT NULL AUTO_INCREMENT,
    nam VARCHAR(255) NOT NULL,
    question_id INT NOT NULL,
    answer_id INT NOT NULL,
    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (answer_id) REFERENCES answers(id),
    PRIMARY KEY (id)
);

CREATE TABLE  high_score {
    id INT NOT NULL AUTO_INCREMENT,
    nam VARCHAR (255) NOT NULL,
    score INT NOT NULL,
    FOREIGN KEY (user_nam) REFERENCES user_answers(nam),
    PRIMARY KEY (id)
};