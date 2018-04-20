var tasks = [];
var current_tasks = 0;

$.getJSON("tasks.json", function (json) {
  tasks = json;
  start();
});

function get_first_task() {
  current_tasks = 0;
  return tasks[0];
}

function get_next_task() {
  current_tasks++;
  if (current_tasks < tasks.length) {
    return tasks[current_tasks];
  } else {
    return null;
  }
}

function finish_and_skip() {
  current_tasks = tasks.length;
  run_calculation();
}

function save_result() {
  result_map.set(task_id, $("#number_slider").val());

  run_next_or_visualize();
}
