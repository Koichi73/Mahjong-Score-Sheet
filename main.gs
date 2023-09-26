function main() {
  let has_error = registration_error() // error.gs
  if (has_error) {
    return
  }

  let result_list = get_name_and_score() // calc.gs

  let game_num = get_today_game_num() // common.gs

  send_grade_to_today(result_list, game_num) // send.gs

  send_grade_to_all(result_list, game_num) // send.gs
}