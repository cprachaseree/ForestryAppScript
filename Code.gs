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

function getUserText() {
  var doc = DocumentApp.getActiveDocument();
  return doc.getBody().getText();
}

function newPage(page) {
  return HtmlService.createHtmlOutputFromFile(page).getContent()
}

function highlightTexts(keyword) {
  var bodyElement = DocumentApp.getActiveDocument().getBody();
  var searchResult = bodyElement.findText(keyword);

  while (searchResult !== null) {
    var thisElement = searchResult.getElement();
    var thisElementText = thisElement.asText();
    thisElementText.setBackgroundColor(searchResult.getStartOffset(), searchResult.getEndOffsetInclusive(),'#F3E2A9');
    searchResult = bodyElement.findText(keyword, searchResult);
  }
}

function clearHighlights() {
  var doc=DocumentApp.getActiveDocument();
  var rangeBuilder=doc.newRange();
  var body=doc.getBody();
  var numCh=body.getNumChildren();
  for (var i=0;i<numCh;i++) {
    var child=body.getChild(i);
    var all=rangeBuilder.addElement(child);
  }
  var selectedElements = all.getRangeElements();
  for(var i=0;i<selectedElements.length;i++) {
    var selElem = selectedElements[i];
    var el = selElem.getElement();
    el.asText().setBackgroundColor(null);
  }
}

