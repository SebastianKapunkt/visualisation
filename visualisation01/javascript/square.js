function prepare_for_square(task, reference_canvas, perceiving_canvas) {
  // left
  draw_square_in_canvas(
    task.reference_scale,
    reference_canvas,
    task.color,
    task.is_filled
  );

  switch (task.answer_type) {
    case "change_draw":
      hide_value();
      slide_handling(function (number) {
        clear_canvas(perceiving_canvas);
        draw_square_in_canvas(
          number,
          perceiving_canvas,
          task.color,
          task.is_filled
        );
      });
      // right
      draw_square_in_canvas(
        task.reference_scale,
        perceiving_canvas,
        task.color,
        task.is_filled
      );
      break;
    case "predict_number":
      reset_value();
      slide_handling(function (number) {
        $(".show_value").html(number);
      });
      // right
      draw_square_in_canvas(
        task.perceiving_scale,
        perceiving_canvas,
        task.color,
        task.is_filled
      );
      break;
  }
}

function draw_square_in_canvas(scale, canvas, color, is_filled) {
  var context = canvas.getContext("2d");

  center_x = (canvas.width / 2) - Math.sqrt(scale) * 45;
  center_y = (canvas.height / 2) - Math.sqrt(scale) * 45;

  context.beginPath();
  context.rect(center_x, center_y, Math.sqrt(scale) * 30, Math.sqrt(scale) * 30);
  if (is_filled) {
    context.fillStyle = color;
    context.fill();
  } else {
    context.lineWidth = 1;
    context.strokeStyle = color;
    context.stroke();
  }
}