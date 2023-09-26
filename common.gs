// 当日成績の半荘数を取得
function get_today_game_num() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('当日成績');
  let game_num = get_last_column('当日成績', 11)
  return game_num
}


// 最終列を取得
function get_last_column(sheet_name, row) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(sheet_name);
  let last_column = sheet.getRange(row, 1).getNextDataCell(SpreadsheetApp.Direction.NEXT).getColumn();
  return last_column
}