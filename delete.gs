// 登録した得点を削除する
function delete_registration() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('当日成績');
  sheet.getRange("B3:B6").clearContent();
}
