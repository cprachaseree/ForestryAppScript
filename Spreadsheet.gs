function createSpreadSheet() {
  var ui = DocumentApp.getUi();
  var result = ui.prompt("Please the enter the file name:");
  var button = result.getSelectedButton();
  if (button == ui.Button.CLOSE) {
    return;
  }
  
  var spreadSheets = SpreadsheetApp.create(result.getResponseText());
  
  var html = HtmlService.createHtmlOutput('View your tables <a href="' + spreadSheets.getUrl() + '" target="_blank">here</a>!')
      .setWidth(300)
      .setHeight(200);
  DocumentApp.getUi().showModalDialog(html, 'Tables created!');
  
  var conceptsSheet = spreadSheets.insertSheet("Concepts");
  var categoriesSheet = spreadSheets.insertSheet("Categories");
  var entitiesSheet = spreadSheets.insertSheet("Entities");
  var keywordsSheet = spreadSheets.insertSheet("Keywords");
  spreadSheets.deleteSheet(spreadSheets.getSheetByName("Sheet1"));
  
  var data = getEntitiesFromText();
  var concepts = data.concepts;
  var categories = data.categories;
  var entities = data.entities;
  var keywords = data.keywords;
  
  var conceptsArray = [];
  conceptsArray.push(["Concept", "Relevance", "Resource"]);
  concepts.forEach(function(concept) {
    conceptsArray.push([concept.text, concept.relevance, concept.dbpedia_resource]);
  });
  conceptsSheet.getRange(conceptsSheet.getLastRow()+1, 1, conceptsArray.length, 3).setValues(conceptsArray);
  conceptsSheet.getRange(1, 1, 1, conceptsSheet.getLastColumn()).setFontWeight("bold");
  conceptsSheet.autoResizeColumns(1, conceptsSheet.getLastColumn());
  
  var categoriesArray = [];
  categoriesArray.push(["Label", "Score"]);
  categories.forEach(function(category) {
    categoriesArray.push([category.label, category.score]);
  });
  categoriesSheet.getRange(categoriesSheet.getLastRow()+1, 1, categoriesArray.length, 2).setValues(categoriesArray);
  categoriesSheet.getRange(1, 1, 1, categoriesSheet.getLastColumn()).setFontWeight("bold");
  categoriesSheet.autoResizeColumns(1, categoriesSheet.getLastColumn());
  
  var entitiesArray = [];
  entitiesArray.push(["Type", "Entity", "Relevance","Confidence", "Count"]);
  entities.forEach(function(entity) {
    entitiesArray.push([entity.type, entity.text, entity.relevance, entity.confidence, entity.count]);
  });
  entitiesSheet.getRange(entitiesSheet.getLastRow()+1, 1, entitiesArray.length, 5).setValues(entitiesArray);
  entitiesSheet.getRange(1, 1, 1, entitiesSheet.getLastColumn()).setFontWeight("bold");
  entitiesSheet.autoResizeColumns(1, entitiesSheet.getLastColumn());
  
  var keywordsArray = [];
  keywordsArray.push(["Keyword", "Relevance","Count"]);
  keywords.forEach(function(keyword) {
    keywordsArray.push([keyword.text, keyword.relevance, keyword.count]);
  });
  keywordsSheet.getRange(keywordsSheet.getLastRow()+1, 1, keywordsArray.length, 3).setValues(keywordsArray);
  keywordsSheet.getRange(1, 1, 1, keywordsSheet.getLastColumn()).setFontWeight("bold");
  keywordsSheet.autoResizeColumns(1, keywordsSheet.getLastColumn());
}


