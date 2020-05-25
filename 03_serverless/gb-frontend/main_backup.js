function performGetRequest1(){
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML='';

    axios.get('https://eohcslyajd.execute-api.eu-west-1.amazonaws.com/Prod/messages')
        .then(function (response){
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function (error){
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

function generateSuccessHTMLOutput(response){
    return  '<h4>Result:</h4>' +
            '<h5>Status:</h5>' +
            '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
            '<h5>Headers:</h5>' +
            '<pre>' + JSON.stringify(response.headers, null, '\t') +'</pre>' +
            '<h5>Data:</h5>' +
            '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';
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

function generateGuestbookOutput(response){
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


document.getElementById('gbInputForm').addEventListener('submit', performPostRequest);

function performPostRequest(){
    var resultElement = document.getElementById('postResult');
    var messageText = document.getElementById('messageText').value;
    var messageName = document.getElementById('messageName').value;
    resultElement.innerHTML='';

    axios.post('https://eohcslyajd.execute-api.eu-west-1.amazonaws.com/Prod/messages', {
        name: messageName,
        message: messageText
    })
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
     //e.preventDefault();
}

function clearOutput() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';
    var resultElement = document.getElementById('postResult');
    resultElement.innerHTML = '';
}