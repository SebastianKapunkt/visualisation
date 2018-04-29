var canvas = null;
var context = null;
var task_instance = null;
var questions = [];
var cursor_x = 0;
var cursor_y = 0;
var result_map = new Map();

function main(task) {
  console.log("ready!");
  if (task.has_task_left()) {
    var current_question = next_question(task.get_next_task());
    prepare_question(current_question);
  } else {
    // all tasks done do something
    console.log("DONE");
    console.log(result_map);
  }
}

function skip_and_finish(){
  task_instance.set_current_to_last();
  main(task_instance);
  disable_canvas();
  $("#panel_cover").css("display", "none");
  $("#question_title").css("display", "none");
  $("#position_indicator").css("display", "none");
  $("#finish_button").css("display", "none");
}


function prepare_question(question) {
  var title = "#question_title";
  var question_text = "#question_text";
  clear_canvas();
  prepare_canvas();
  set_canvas_interaction(question.time, question.draw_call);
  question.set_title_text(title);
  $("#position_indicator").text(
    1 + question.id + "/" + task_instance.get_task_length()
  );
}

$(document).ready(function() {
  console.log("document ready!");
  canvas = document.getElementById("main_canvas");
  context = canvas.getContext("2d");
  task_instance = new Task(main);
  task_instance.init();
});

function clear_canvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.my_scale = 0;
  cursor_x = 0;
  cursor_y = 0;
}

function prepare_canvas() {
  $("#panel_cover").css("display", "flex");
  $("#main_panel").css("display", "none");
  $("#panel_cover").off("click");
  disable_submit_button();
  disable_repeat_button();
}

function disable_submit_button() {
  $("#submit_click").css("display", "none");
  $("#submit_click").off("click");
}

function disable_repeat_button() {
  $("#repeat_click").css("display", "none");
  $("#repeat_click").off("click");
}

function disable_canvas(){
  canvas.removeEventListener("click", handle_canvas_click);
}

function prepare_answer_click() {
  clear_canvas();
  get_current_question().set_question_text("#question_text");
  $("#repeat_click").css("display", "flex");
  $("#repeat_click").click(function() {
    var question = get_current_question();
    question.next_run();
    prepare_question(question);
  });
  canvas.addEventListener("click", handle_canvas_click, false);
}

function handle_canvas_click(event) {
  clear_canvas();
  var rect = canvas.getBoundingClientRect();
  cursor_x = event.clientX - rect.left;
  cursor_y = event.clientY - rect.top;

  context.beginPath();
  context.arc(cursor_x, cursor_y, 5, 0, 2 * Math.PI);
  context.stroke();

  $("#submit_click").css("display", "flex");
  $("#submit_click").click(function() {
    disable_submit_button();
    disable_repeat_button();
    $("#question_text").text("");
    disable_canvas();
    collect_data_and_save();
    main(task_instance);
  });
}

function set_canvas_interaction(time, draw_call) {
  $("#panel_cover").click(function() {
    $("#panel_cover").css("display", "none");
    $("#main_panel").css("display", "flex");
    draw_call();
    setTimeout(prepare_answer_click, time);
  });
}

function get_current_question() {
  return questions[questions.length - 1];
}

function collect_data_and_save() {
  var question = get_current_question();
  var id = question.id;
  var time = question.time;
  var x = cursor_x;
  var y = cursor_y;

  var result = new Result(id, time, x, y);
  result_map.set(id, result);
  clear_canvas();
}
