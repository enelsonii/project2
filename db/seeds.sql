-- Questions seeds 
INSERT INTO questions (question) 
VALUES ('Are Patrick and Gary related?') , 
('How many times do they say Spongebob Squarepants in the intro?') ,
('What does E.V.I.L stand for?') ,
("What did Mr. Krabbs trade Spongebob's soul for?") ,
('What is the town they live in?') ,
('Where did Bubble Bass hide the pickles?') ,
('What attracts a sea bear?') ,
('What attracts a sea rhinoceros?') ,
('The worm that terrorized Spongebob and the rest of the town was an ____?') ,
('In "The Gravyard Shift," who does Squidward make up to scare Spongebob?');

-- answers seeds
INSERT INTO answers (answer, question_id, is_correct)
VALUES ('Yes', 1,true) , 
('8', 2,true) ,
('Every. Villian. Is. Lemons', 3,true) ,
("62 cents", 4,true) ,
('Bikini Bottom', 5,true) ,
('Under Tongue', 6,true) ,
('Wearing a sombrero in a goofy fashion', 7,true) ,
('the sounds of a Sea Bear attack', 8,true) ,
('alaskan bull worm', 9,true) ,
('the hash slinging slasher', 10,true),
('No', 1, false),
('4', 2, false),
('Every van is lame', 3, false),
('Krabby Patty formula', 4, false),
('Goo Lagoon', 5, false),
('Behind Ear', 6, false),
('Play bongoos', 7, false),
('Doing the moon walk', 8, false),
('Space Worm', 9, false),
('the sand slinging slasher', 10, false);

SELECT q.id AS question_id, q.question, a.answer, a.is_correct FROM questions q LEFT JOIN answers a ON q.id = a.question_id;