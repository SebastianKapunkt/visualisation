function start() {
  $(".start_screen").css("display", "none");
  run();
}

function run() {
  // #### initial setup ####
  // get the task values form json
  let task = get_first_task();
  // set input slide intial value to reference scale
  $("#number_slider").val(task.reference_scale);
  // get the two canvas
  var reference_canvas = document.getElementById("left_panel");
  var perceiving_canvas = document.getElementById("right_panel");

  // draw the reference shape
  draw_circle_in_canvas(
    reference_canvas.width / 2,
    reference_canvas.height / 2,
    task.reference_scale,
    reference_canvas,
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
      5,
      true
    );
  });
}

function save_result() {
  var perceiving_canvas = document.getElementById("right_panel");
  console.log(perceiving_canvas.my_scale);
}
