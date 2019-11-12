window.onload = function() {
  var searchButton = document.getElementById("btn");
  var httpRequest;

  searchButton.onclick = makeRequest;

  function makeRequest() {
    event.preventDefault();
    httpRequest = new XMLHttpRequest();
    var userInput = document.getElementById("inputField").value;
    var url = "superheroes.php" + "?query=" + userInput;

    httpRequest.onreadystatechange = getResults;
    httpRequest.open('GET', url);
    httpRequest.send();
  }

  function getResults() {
    if(httpRequest.readyState === XMLHttpRequest.DONE) {
      if(httpRequest.status === 200) {
        var response = httpRequest.responseText;
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = response;
      } else {
        alert("Something went wrong with the request! Request Status = " + httpRequest.status);
      }
    }
  }
};