let task_id = -1;
var result_map = new Map();

function start() {
  $(".start_screen").css("display", "none");
  let task = get_first_task();
  run(task);
}

function run(task) {
  // #### initial setup ####
  // get the task values form json
  task_id = task.id;
  // set input slide intial value to reference scale
  $("#number_slider").val(task.reference_scale);
  // get the two canvas
  var reference_canvas = document.getElementById("left_panel");
  var perceiving_canvas = document.getElementById("right_panel");

  // draw the reference shape
  clear_canvas(reference_canvas);
  draw_circle_in_canvas(
    reference_canvas.width / 2,
    reference_canvas.height / 2,
    task.reference_scale,
    reference_canvas,
    task.color,
    task.is_filled
  );

  clear_canvas(perceiving_canvas);
    draw_circle_in_canvas(
      perceiving_canvas.width / 2,
      perceiving_canvas.height / 2,
      task.reference_scale,
      perceiving_canvas,
      task.color,
      task.is_filled
    );

  //set function for handling slider
  slide_handling(function(number) {
    clear_canvas(perceiving_canvas);
    draw_circle_in_canvas(
      perceiving_canvas.width / 2,
      perceiving_canvas.height / 2,
      number,
      perceiving_canvas,
      task.color,
      task.is_filled
    );
  });
}

function run_next_or_visualize(){
  let task = get_next_task();
  if(task == null){
    run_calculation()
  }else{
    run(task)
  }
}

function run_calculation(){
  $(".end_screen").css("display", "flex");
}

function save_result() {
  var perceiving_canvas = document.getElementById("right_panel");
  console.log(perceiving_canvas.my_scale);
  result_map.set(task_id, perceiving_canvas.my_scale)

  run_next_or_visualize();
}
