var result = "none";

function refresh() {
  result = "none";
  Logger.log(result);
  //getEntitiesFromText();
}

function getEntitiesFromText() {
  Logger.log(result);
  if (result == "none") {
    var url = getAPIUrl() + "/v1/analyze?version=2019-07-12";
    var apiKey = getAPIKey();
    var text = getUserText();
    var data = {
      "text": text,
      "features": {
        "categories": {
          "emotion": false,
          "sentiment": false
        },
        "entities": {
          "emotion": false,
          "sentiment": false
        },
        "concepts": {},
        "keywords": {
          "emotion": false,
          "sentiment": false,
          "limit": 10
        }
      }
    };
    var options = {
      "method": "POST",
      "contentType": "application/json",
      "payload": JSON.stringify(data),
      "headers": {
        "Authorization" : "Basic " + Utilities.base64Encode("apikey" + ":" + apiKey)
      }
    };
    var response = UrlFetchApp.fetch(url, options);
    result = response.getContentText();
  }
  return result;
}

