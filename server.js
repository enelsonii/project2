var express = require('express');
var app = express();
var score;
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "greatness4",
    database: "quiz_db"
});

app.set('view engine', 'ejs');

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/test', function (req, res) {
    connection.query("SELECT * FROM user_answers", function (error, results, fields) {
        if (error) throw error;

        res.render('pages/index', {
            data: results
        })
    })
    // res.render('pages/index');
});

app.post('/submit', function (req, res) {
    // CREATE TABLE user_answers (
    //     user_id INT NOT NULL,
    //     question_id INT NOT NULL,
    //     answer_id INT NOT NULL,
    //     FOREIGN KEY (user_id) REFERENCES users(id),
    //     FOREIGN KEY (question_id) REFERENCES questions(id),
    //     FOREIGN KEY (answer_id) REFERENCES answers(id)
    // );
    // res.json(req.body);

    connection.query("INSERT INTO user_answers (nam, question_id, answer_id) VALUES (?, ?, ?)", [req.body.nam, 1, req.body["1"].split(',')[0], score], function (error, results, fields) {
        if (error) throw error;

        connection.query("INSERT INTO user_answers (nam, question_id, answer_id) VALUES (?, ?, ?)", [req.body.nam, 2, req.body["2"].split(',')[0], score], function (error, results, fields) {
            if (error) throw error;

            connection.query("INSERT INTO user_answers (nam, question_id, answer_id) VALUES (?, ?, ?)", [req.body.nam, 3, req.body["3"].split(',')[0], score], function (error, results, fields) {
                if (error) throw error;

                connection.query("INSERT INTO user_answers (nam, question_id, answer_id) VALUES (?, ?, ?)", [req.body.nam, 4, req.body["4"].split(',')[0], score], function (error, results, fields) {
                    if (error) throw error;

                    connection.query("INSERT INTO user_answers (nam, question_id, answer_id) VALUES (?, ?, ?)", [req.body.nam, 5, req.body["5"].split(',')[0], score], function (error, results, fields) {
                        if (error) throw error;

                        connection.query("INSERT INTO user_answers (nam, question_id, answer_id) VALUES (?, ?, ?)", [req.body.nam, 6, req.body["6"].split(',')[0], score], function (error, results, fields) {
                            if (error) throw error;

                            connection.query("INSERT INTO user_answers (nam, question_id, answer_id) VALUES (?, ?, ?)", [req.body.nam, 7, req.body["7"].split(',')[0], score], function (error, results, fields) {
                                if (error) throw error;

                                connection.query("INSERT INTO user_answers (nam, question_id, answer_id) VALUES (?, ?, ?)", [req.body.nam, 8, req.body["8"].split(',')[0], score], function (error, results, fields) {
                                    if (error) throw error;

                                    connection.query("INSERT INTO user_answers (nam, question_id, answer_id) VALUES (?, ?, ?)", [req.body.nam, 9, req.body["9"].split(',')[0], score], function (error, results, fields) {
                                        if (error) throw error;

                                        connection.query("INSERT INTO user_answers (nam, question_id, answer_id) VALUES (?, ?, ?)", [req.body.nam, 10, req.body["10"].split(',')[0], score], function (error, results, fields) {
                                            if (error) throw error;

                                            // connection.query("INSERT INTO high_score (nam, score) VALUES (?, ?)", [req.body.nam, score], function (error, results, fields) {
                                            //     if (error) throw error;
                                            //     score = 0;
                                            //     var data = req.body;
                                            //     for (var key in data) {
                                            //         if (key != "nam") {
                                            //             if (data[key].split(',')[1] == "1") {
                                            //                 score++;
                                                            
                                            //                 return score;
                                            //             }
                                            //         }
                                            //     }
                                            //     res.json(req.body);
                                            // })
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    // 2. calculate their score 
    // 3. make a highscore table 
    // 4. put their score into the high scores table
    // 5. send the user to a highscores page where they can see how they did
})


app.get('/', function (req, res) {
    connection.query('SELECT q.id AS question_id, q.question, a.id as answer_id, a.answer, a.is_correct FROM questions q LEFT JOIN answers a ON q.id = a.question_id', function (error, results, fields) {
        if (error) throw error;
        var question_ids = [];
        var data_changed = {};

        for (var i = 0; i < results.length; i++) {
            if (!question_ids.includes(results[i].question_id)) {

                question_ids.push(results[i].question_id);

                data_changed[results[i].question_id] = {
                    question: results[i].question,
                    answers: [{
                        answer_id: results[i].answer_id,
                        answer: results[i].answer,
                        is_correct: results[i].is_correct
                    }]
                }
            } else {
                data_changed[results[i].question_id].answers.push({
                    answer_id: results[i].answer_id,
                    answer: results[i].answer,
                    is_correct: results[i].is_correct
                })
            }
        }
        //   res.json(data_changed);

        res.render('pages/form', {
            data: data_changed
        });
    });


});

// app.get('/', function (req, res) {
//     connection.query('SELECT * FROM questions',function (error, results, fields) {
//         if (error) throw error;

//         res.render('pages/index', {
//             data: results
//         });
// });

// app.post('/submit', function (req, res) {
//     connection.query("INSERT INTO user (name) VALUES ('?')", [req.body.user], function(error, results, fields) {
//         if (error) throw error;
//     })
//     res.redirect('/quiz');
// })

// app.get('/quiz', function(req, res) {
// 	connection.query('SELECT * FROM questions',function (error, results, fields) {
// 	  if (error) throw error;

// 	  res.render('pages/quiz', {
// 	  	data: results
// 	  });
// 	});


// });

// app.get('/TEST', function (req, res) {
//     connection.query('SELECT * FROM answers', function (error, results, fields) {
//         if (error) throw error;

//         res.render('pages/quiz', {
//             data: results
//         });
//     });
// });

// app.get('/', function (req, res){
//     connection.query('SELECT * FROM answers', function(error, results, fields) {
//         if (error) throw error;

//         res.render('pages/quiz', {
//             data: results
//         });
//     });
// });

app.listen(3000, function () {
    console.log('listening on 3000... Yerrrr!!!')
});