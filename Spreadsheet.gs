function createSpreadSheet() {
  var spreadSheets = SpreadsheetApp.create("Forestry simplified Tables");
  
  var html = HtmlService.createHtmlOutput('View your tables <a href="' + sheet.getUrl() + '" target="_blank">here</a>!')
      .setWidth(300)
      .setHeight(200);
  DocumentApp.getUi().showModalDialog(html, 'Tables created!');
  
  var conceptsSheet = spreadSheets.insertSheet("concepts");
  var categoriesSheet = spreadSheets.insertSheet("categories");
  var entitiesSheet = spreadSheets.insertSheet("entities");
  var keywordsSheet = spreadSheets.insertSheet("keywords");
  spreadSheets.deleteSheet("Sheet 1");
  
  
}


