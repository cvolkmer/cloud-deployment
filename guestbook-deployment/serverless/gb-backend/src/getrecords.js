var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '<DB_Endpoint_Connection>',
    user     : '<DB_User>',
    password : '<DB_Password>',
    port     : 3306,
    database : '<DB_Name>'
});

exports.lambdaHandler = (event, context, callback) => {
    // allows for using callbacks as finish/error-handlers
    context.callbackWaitsForEmptyEventLoop = false;
    connection.query('SELECT * FROM `guestbook` ORDER BY `date` DESC;', function (err, result) {
        if (err) throw err;
        var response = {
            'statusCode': 200,
            headers: {
                "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
                "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
            },
            'body': JSON.stringify({
                message: result,
            })
        };
        callback(null, response);
    });
};