function onOpen() {
  
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Render')
      .addItem('Image by URL', 'main')
      .addSeparator()
      .addItem('Source code', 'github')
      .addToUi()
  
}

function main() {

  var sheet = SpreadsheetApp.getActiveSpreadsheet()
  var alp = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z' ]

  Logger.log(sheet.getUrl())

  var value = SpreadsheetApp.getUi().prompt('Enter a valid URL: ').getResponseText()
  var resp = JSON.parse(UrlFetchApp.fetch('https://pixelsinimage.herokuapp.com/api?u='+value).getContentText())

  var [a, n] = [0, 1]

  resp['pix'].forEach(function(pix){
    if (pix !== 'IMG_END' && alp[a])
    {
      sheet.getRange(alp[a]+n).setBackground(pix)
      console.log(alp[a]+n)
      a ++
    }
    else
    {
      console.log(pix)
      a = 0
      n ++
    }
  })

}

function github() {

  var htmlOutput = HtmlService.createHtmlOutputFromFile('index').setHeight(100);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Going to the source code...');

}
