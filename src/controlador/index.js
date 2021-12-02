const mysql = require('mysql');

const connection = mysql.createConnection({
    //Con variables de entorno
    host: 'yjo6uubt3u5c16az.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'vqr7pqgv9buvm0li',
    password: 'd812kd201x7smjwn',
    port: 3306,
    database: 'rano95li1dxmil52'
});

connection.connect((error) => {
    if (error) {
        console.error('El error de conexión es: ' + error);
        return;
    }
    console.log('¡Conectado a la Base de Datos!');
});
