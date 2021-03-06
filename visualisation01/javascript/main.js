let task_id = -1;
let task_answer_type = null;
var result_map = new Map();

function start() {
  $(".start_screen").css("display", "none");
  $(".end_screen").css("display", "none");
  let task = get_first_task();
  draw_task(task);
}

function draw_task(task) {
  var reference_canvas = document.getElementById("left_panel");
  var perceiving_canvas = document.getElementById("right_panel");
  // #### initial setup ####
  // set current task ID global
  task_id = task.id;
  task_answer_type = task.task_answer_type;

  // set header text
  var display_text_field = document.getElementById("display_text_field");
  display_text_field.textContent = task.display_text;
  // set input slide intial value to reference scale
  $("#number_slider").val(task.reference_scale);
  $("#number_slider").prop('step', task.step); 
  $("#number_slider").prop('min', task.min_value); 
  $("#number_slider").prop('max', task.max_value); 

  clear_canvas(reference_canvas);
  clear_canvas(perceiving_canvas);

  switch (task.draw_type) {
    case "circle":
      prepare_for_circle(task, reference_canvas, perceiving_canvas);
      break;
    case "square":
      prepare_for_square(task, reference_canvas, perceiving_canvas);
      break;
  }
}

function run_next_or_visualize() {
  let task = get_next_task();
  if (task == null) {
    run_calculation();
  } else {
    draw_task(task);
  }
}

function clear_canvas(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.my_scale = 0;
}

function slide_handling(callback) {
  $("#number_slider").off();
  $("#number_slider").on("input change", function () {
    var current_slider_value = $(this).val();
    callback(current_slider_value);
  });
}

function hide_value() {
  $(".show_value").css("display", "none");
}

function reset_value() {
  $(".show_value").css("display", "flex");
  $(".show_value").html("");
}
