function performGetRequest(){
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML='';

    axios.get('https://eohcslyajd.execute-api.eu-west-1.amazonaws.com/Prod/messages')
        .then(function (response){
            var messageResult = '';
            for (var i = 0; i < response.data.result.length; i++){
                var obj = response.data.result[i];
                var message = response.data.result[i].message;
                var name = response.data.result[i].name;
                var date = response.data.result[i].date;
                messageResult = messageResult +
                    '<div class="panel panel-default">'+
                        '<div class="panel-heading"><h4>' + name + '</h4></div>' +
                        '<div class="panel-body">' + message + '</div>' +
                        '<div class="panel-body">' + date + '</div>' +
                    '</div>'
            }
            //console.log(messageResult)
            resultElement.innerHTML = messageResult;
        })
        .catch(function (error){
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

//document.getElementById('gbInputForm').addEventListener('submit', performPostRequest);
document.getElementById('performPost').addEventListener('click', performPostRequest);

function performPostRequest(){
    var resultElement = document.getElementById('postResult');
    var messageText = document.getElementById('messageText').value;
    var messageName = document.getElementById('messageName').value;
    resultElement.innerHTML='';
    console.log(messageName);
    console.log(messageText);
    axios.post('https://eohcslyajd.execute-api.eu-west-1.amazonaws.com/Prod/messages', {
        "name": messageName,
        "message": messageText
    })
        .then(function (response) {
            resultElement.innerHTML = response.status;
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

function refreshPage(){
    window.location.reload();
}

function clearOutput() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';
    var resultElement = document.getElementById('postResult');
    resultElement.innerHTML = '';
}


function generateErrorHTMLOutput(error){
    return  '<h4>Result:</h4>' +
        '<h5>Message:</h5>' +
        '<pre>' + error.message + '</pre>' +
        '<h5>Status:</h5>' +
        '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
        '<h5>Headers:</h5>' +
        '<pre>' + JSON.stringify(error.response.headers, null, '\t') +'</pre>' +
        '<h5>Data:</h5>' +
        '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>';
}