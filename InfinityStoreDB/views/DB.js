const mysql = require('mysql2');

// Параметри підключення до бази даних
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'DESKTOP-II8KBIQ',
    password: '',
    database: 'Microsoft MySQL'
});

// Встановлення з'єднання
connection.connect(function(err) {
    if (err) {
        console.error('Помилка підключення: ' + err.stack);
        return;
    }
    console.log('Підключено до бази даних MySQL як id ' + connection.threadId);
});

// Закриття з'єднання
connection.end();