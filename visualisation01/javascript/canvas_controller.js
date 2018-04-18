function draw_circle_in_canvas(
  center_x,
  center_y,
  radius,
  canvas,
  color,
  is_filled
) {
  var context = canvas.getContext("2d");
  radius = radius * 10;

  context.beginPath();
  context.arc(center_x, center_y, radius, 0, 2 * Math.PI, false);
  if (is_filled) {
    context.fillStyle = color;
    context.fill();
  }
  context.lineWidth = 1;
  context.strokeStyle = color;
  context.stroke();
  canvas.my_scale = radius / 10;
}

function clear_canvas(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.my_scale = 0;
}

function slide_handling(callback) {
  $(document).on("input change", "#number_slider", function() {
    var current_slider_value = $(this).val();
    callback(current_slider_value);
  });
}
