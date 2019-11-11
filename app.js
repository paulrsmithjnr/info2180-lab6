window.onload = function() {
  var searchButton = document.getElementById("btn");
  var httpRequest;

  searchButton.onclick = makeRequest;

  function makeRequest() {
    httpRequest = new XMLHttpRequest();
    var url = "superheroes.php";

    httpRequest.onreadystatechange = getResults;
    httpRequest.open('GET', url);
    httpRequest.send();
  }

  function getResults() {
    if(httpRequest.readyState === XMLHttpRequest.DONE) {
      if(httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert("Something went wrong with the request! Request Status = " + httpRequest.status);
      }
    }
  }
};