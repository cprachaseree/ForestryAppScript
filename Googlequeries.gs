function getKnowledgeFromText() {
  var apiKey = getGoogleAPI();
  var url = getGoogleURL() + "?limit=1&key=" + apiKey + "&query=";
  var data = getEntitiesFromText();
  var concepts = data.concepts;
  var ret = [];
  concepts.forEach(function(concept) {
    Logger.log(concept.text);
    var options = {
      "method": "GET",
      "headers": {
        "Accept": "application/json"
      }
    };
    var response = UrlFetchApp.fetch(url + concept.text, options);
    var result = JSON.parse(response.getContentText());
    Logger.log(result);
    ret.push(result);
  });
  Logger.log(ret);
  return ret;
}