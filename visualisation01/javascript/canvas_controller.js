function draw_circle_in_canvas(
  center_x,
  center_y,
  radius,
  canvas,
  color,
  line_width,
  is_filled
) {
  var context = canvas.getContext("2d");
  context.beginPath();
  context.arc(center_x, center_y, radius, 0, 2 * Math.PI, false);
  if (is_filled) {
    context.fillStyle = color;
  }
  context.fill();
  context.lineWidth = line_width;
  context.strokeStyle = color;
  context.stroke();
}

function clear_canvas(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
}
