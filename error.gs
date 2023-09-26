// 登録画面のcheckが0でない場合、エラーを返す
function registration_error() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('当日成績');

  has_error = false;
  let check_value = sheet.getRange("B7").getValue();
  if (check_value !== 0) {
    let ui = SpreadsheetApp.getUi();
    ui.alert('エラー', '登録した得点が正しくありません。', ui.ButtonSet.OK);
    has_error = true;
  }

  return has_error;
}