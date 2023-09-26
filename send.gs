// シート「当日成績」に結果を反映する
function send_grade_to_today(result_list, game_num) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('当日成績');

  // 当日の雀士の順番を取得
  let name_list_values = sheet.getRange('A3:A6').getValues();
  let name_list = name_list_values.map(item => item[0]);

  // 成績の反映
  for (let i = 0; i < 4; i++) {
    let grade_name_row = name_list.indexOf(result_list[i][0]);
    let grade_range = sheet.getRange(grade_name_row+11, game_num + 1);
    grade_range.setValue(result_list[i][1]);
  }
}


// シート「全体成績」に結果を反映する
function send_grade_to_all(result_list, game_num) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('全体成績');

  // 全体の雀士を取得
  let name_list_values = sheet.getRange('A2:A16').getValues();
  let name_list = name_list_values.flat().filter(item => item !== '');

  // 全体表の最終列を取得
  last_column_list = []
  for (let i = 0; i < name_list.length; i++) {
    last_column_list.push(get_last_column('全体成績', (i+1)*2))
  }
  let last_column = Math.max(...last_column_list);
  
  // 成績の反映
  for (let i = 0; i < 4; i++) {
    let row = name_list.indexOf(result_list[i][0]);
    let range = sheet.getRange((row+1)*2, last_column + 1, 2, 1);
    range.setValues([[i+1], [result_list[i][1]]]);
  }

  // 日付の表示
  if (game_num === 2) {
    let today = new Date();
    let formattedDate = Utilities.formatDate(today, "GMT", "yyyy/MM/dd");
    let range = sheet.getRange(1, last_column + 1);
    range.setValue(formattedDate);
  }
}
