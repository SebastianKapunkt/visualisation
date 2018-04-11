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
  canvas.my_scale = radius/10;
}

function clear_canvas(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.my_scale = 0;
}

function slide_handling(callback) {
  $(document).on(
    "input change",
    "#number_slider",
    debounce(function() {
      var current_slider_value = $(this).val();
      callback(current_slider_value);
    }, 0)
  );
}

// source: https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
