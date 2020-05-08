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