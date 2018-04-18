var tasks = [];
var current_tasks = 0;

$.getJSON("tasks.json", function(json) {
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

function run_calculation() {
  $(".end_screen").css("display", "flex");

  // join the results back on the task
  var results = tasks.map(function(item) {
    item.user_value = result_map.get(item.id);
    return item;
  });

  get_result_as_json(results);
  console.log(results);
}

function save_result() {
  result_map.set(task_id, $("#number_slider").val());

  run_next_or_visualize();
}

function get_result_as_json(results) {
  var dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(results));
  var dlAnchorElem = document.getElementById("downloadAnchorElem");
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", "task_results.json");
  dlAnchorElem.click();
}
