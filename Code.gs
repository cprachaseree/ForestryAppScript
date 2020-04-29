// add addon option in addons menu
function onOpen(e) {
  DocumentApp.getUi()
    .createAddonMenu()
    .addItem('Forestry', 'showSidebar')
    .addToUi();
}

// function called at onOpen
function showSidebar() {
  var ui = HtmlService.createHtmlOutputFromFile('main')
      .setTitle('Forestry App Script')
  DocumentApp.getUi().showSidebar(ui);
}

function getUserText(){
  var doc = DocumentApp.getActiveDocument();
  return doc.getBody().getText();
}


function getEntitiesFromText() {
  /*
  var url = getAPIUrl() + "/v1/analyze?version=2019-07-12";
  var apiKey = getAPIKey();
  Logger.log(url);
  Logger.log(apiKey);
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
        "sentiment": false
      }
    }
  };
  Logger.log(data);
  var options = {
    "method": "POST",
    "contentType": "application/json",
    "payload": JSON.stringify(data),
    "headers": {
      "Authorization" : "Basic " + Utilities.base64Encode("apikey" + ":" + apiKey)
    }
  };
  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response);
  return response;*/
  return {
  "usage": {
    "text_units": 1,
    "text_characters": 2378,
    "features": 4
  },
  "language": "en",
  "keywords": [
    {
      "text": "simple request-response protocol",
      "relevance": 0.677098,
      "count": 1
    },
    {
      "text": "HTTP protocol",
      "relevance": 0.664803,
      "count": 1
    },
    {
      "text": "specified resource",
      "relevance": 0.653486,
      "count": 5
    },
    {
      "text": "p1",
      "relevance": 0.648745,
      "count": 2
    },
    {
      "text": "input data",
      "relevance": 0.63235,
      "count": 1
    },
    {
      "text": "white-center",
      "relevance": 0.623434,
      "count": 3
    },
    {
      "text": "DOCTYPE html",
      "relevance": 0.591839,
      "count": 2
    },
    {
      "text": "HTTP",
      "relevance": 0.574116,
      "count": 2
    },
    {
      "text": "background-color",
      "relevance": 0.568379,
      "count": 1
    },
    {
      "text": "PermanentlyPermanent redirection307Temporary RedirectTry URI",
      "relevance": 0.566558,
      "count": 1
    },
    {
      "text": "file index.html",
      "relevance": 0.560778,
      "count": 1
    },
    {
      "text": "data",
      "relevance": 0.550485,
      "count": 4
    },
    {
      "text": "HTTP GETrequest",
      "relevance": 0.549281,
      "count": 1
    },
    {
      "text": "index.html HTTP",
      "relevance": 0.54267,
      "count": 1
    },
    {
      "text": "HTTP Response",
      "relevance": 0.539779,
      "count": 1
    },
    {
      "text": "p id",
      "relevance": 0.538334,
      "count": 1
    },
    {
      "text": "CSS Selectors",
      "relevance": 0.535094,
      "count": 1
    },
    {
      "text": "Reads data",
      "relevance": 0.529401,
      "count": 1
    },
    {
      "text": "programming language of HTML",
      "relevance": 0.529328,
      "count": 1
    },
    {
      "text": "Page Title",
      "relevance": 0.529246,
      "count": 1
    },
    {
      "text": "bodyHTTP RequestGET",
      "relevance": 0.528805,
      "count": 1
    },
    {
      "text": "font-family",
      "relevance": 0.526041,
      "count": 1
    },
    {
      "text": "500Internal Server ErrorSomething",
      "relevance": 0.525428,
      "count": 1
    },
    {
      "text": "server",
      "relevance": 0.521894,
      "count": 2
    },
    {
      "text": "head",
      "relevance": 0.520793,
      "count": 3
    },
    {
      "text": "Location field",
      "relevance": 0.519506,
      "count": 1
    },
    {
      "text": "HTTP header",
      "relevance": 0.519001,
      "count": 1
    },
    {
      "text": "en-usAccept-Charset",
      "relevance": 0.518372,
      "count": 1
    },
    {
      "text": "class",
      "relevance": 0.518007,
      "count": 1
    },
    {
      "text": "title",
      "relevance": 0.517673,
      "count": 2
    },
    {
      "text": "headers",
      "relevance": 0.517334,
      "count": 1
    },
    {
      "text": "response",
      "relevance": 0.517167,
      "count": 2
    },
    {
      "text": "user",
      "relevance": 0.516702,
      "count": 1
    },
    {
      "text": "text",
      "relevance": 0.516225,
      "count": 3
    },
    {
      "text": "5.0Accept",
      "relevance": 0.514274,
      "count": 1
    },
    {
      "text": "html",
      "relevance": 0.513272,
      "count": 4
    },
    {
      "text": "h1 class",
      "relevance": 0.513193,
      "count": 1
    },
    {
      "text": "center",
      "relevance": 0.513114,
      "count": 1
    },
    {
      "text": "Web",
      "relevance": 0.511673,
      "count": 1
    },
    {
      "text": "socket",
      "relevance": 0.5103,
      "count": 1
    },
    {
      "text": "information",
      "relevance": 0.509857,
      "count": 1
    },
    {
      "text": "body",
      "relevance": 0.509625,
      "count": 2
    },
    {
      "text": "browser",
      "relevance": 0.509538,
      "count": 1
    },
    {
      "text": "requested functionality 503Service",
      "relevance": 0.509512,
      "count": 1
    },
    {
      "text": "paragraph",
      "relevance": 0.509318,
      "count": 2
    },
    {
      "text": "Sun",
      "relevance": 0.508252,
      "count": 1
    },
    {
      "text": "Jul",
      "relevance": 0.507917,
      "count": 1
    },
    {
      "text": "Error",
      "relevance": 0.507681,
      "count": 1
    },
    {
      "text": "Host",
      "relevance": 0.507557,
      "count": 1
    },
    {
      "text": "Introduction",
      "relevance": 0.506917,
      "count": 1
    }
  ],
  "entities": [
    {
      "type": "Hashtag",
      "text": "#idbody",
      "relevance": 0.978348,
      "count": 1,
      "confidence": 0.8
    }
  ],
  "concepts": [
    {
      "text": "Internet",
      "relevance": 0.95958,
      "dbpedia_resource": "http://dbpedia.org/resource/Internet"
    },
    {
      "text": "World Wide Web",
      "relevance": 0.800699,
      "dbpedia_resource": "http://dbpedia.org/resource/World_Wide_Web"
    },
    {
      "text": "Web browser",
      "relevance": 0.648645,
      "dbpedia_resource": "http://dbpedia.org/resource/Web_browser"
    },
    {
      "text": "Uniform Resource Identifier",
      "relevance": 0.635822,
      "dbpedia_resource": "http://dbpedia.org/resource/Uniform_Resource_Identifier"
    },
    {
      "text": "Hypertext Transfer Protocol",
      "relevance": 0.620683,
      "dbpedia_resource": "http://dbpedia.org/resource/Hypertext_Transfer_Protocol"
    },
    {
      "text": "Computer program",
      "relevance": 0.532096,
      "dbpedia_resource": "http://dbpedia.org/resource/Computer_program"
    },
    {
      "text": "HTML",
      "relevance": 0.522453,
      "dbpedia_resource": "http://dbpedia.org/resource/HTML"
    },
    {
      "text": "Internet Protocol Suite",
      "relevance": 0.513702,
      "dbpedia_resource": "http://dbpedia.org/resource/Internet_Protocol_Suite"
    }
  ],
  "categories": [
    {
      "score": 0.720432,
      "label": "/technology and computing/hardware/computer/servers"
    },
    {
      "score": 0.708916,
      "label": "/technology and computing/internet technology/email"
    },
    {
      "score": 0.66326,
      "label": "/technology and computing/programming languages/javascript"
    }
  ]
}
}

