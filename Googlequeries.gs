function getKnowledgeFromText() {
  /*
  var apiKey = getGoogleAPI();
  var url = getGoogleURL() + "?limit=1&key=" + apiKey + "&query=";
  var data = getEntitiesFromText();
  var concepts = data.concepts;
  var ret = {};
  concepts.forEach(function(concept) {
    Logger.log(concept.text);
    var options = {
      "method": "GET",
      "headers": {
        "Accept": "application/json"
      }
    };
    var response = UrlFetchApp.fetch(url + concept.text, options);
    Logger.log(response);
    var data = {};
    var item = response.itemListElement;
    Logger.log(item);
    data.type = item.result["@type"];
    data.detail = item.detailedDescription;
    data.image = item.image;
    Logger.log(data);
    ret[concept.text] = data;
  });
  Logger.log(ret);
  Logger.log(JSON.stringify(ret));
  return JSON.stringify(ret);*/
  return [{
  "@context": {
    "kg": "http://g.co/kg",
    "detailedDescription": "goog:detailedDescription",
    "resultScore": "goog:resultScore",
    "goog": "http://schema.googleapis.com/",
    "EntitySearchResult": "goog:EntitySearchResult",
    "@vocab": "http://schema.org/"
  },
  "@type": "ItemList",
  "itemListElement": [
    {
      "result": {
        "detailedDescription": {
          "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License",
          "url": "https://en.wikipedia.org/wiki/Uniform_Resource_Identifier",
          "articleBody": "A Uniform Resource Identifier is a string of characters that unambiguously identifies a particular resource. To guarantee uniformity, all URIs follow a predefined set of syntax rules, but also maintain extensibility through a separately defined hierarchical naming scheme.\n"
        },
        "@id": "kg:/m/07wz2",
        "image": {
          "contentUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWvLpeg0NhBmfW32I1JHWQq5us9p2uhKbD1OkebHszoOyoPDwm",
          "url": "https://zh.m.wikipedia.org/wiki/File:URI_Euler_Diagram_no_lone_URIs.svg"
        },
        "name": "Uniform Resource Identifier",
        "@type": [
          "Thing"
        ],
        "description": "Internet protocol"
      },
      "resultScore": 14121.3369140625,
      "@type": "EntitySearchResult"
    }
  ]
}];
}