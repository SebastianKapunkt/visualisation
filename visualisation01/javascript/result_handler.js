function run_calculation() {
    $(".end_screen").css("display", "flex");

    // join the results back on the task
    var results = tasks.map(function (item) {
        if (result_map.get(item.id) != null) {
            item.user_value = result_map.get(item.id);
            return item;
        }
    });

    get_result_as_json(results);
    draw_result_keys();
    draw_current_user_results(results);
    // draw_average_user_results();
    console.log(results);
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

function draw_result_keys() {
    var canvas = document.getElementById("keys");
    var context = canvas.getContext("2d");

    var box_size = 20;
    var colors = ["blue", "red"];

    for (i = 0; i < colors.length; i++) {

        position_x = canvas.width / (colors.length + 1) * (i + 1) - box_size / 2;
        position_y = (canvas.height / 2) - box_size / 2;

        context.beginPath();
        context.rect(position_x, position_y, box_size, box_size);
        context.fillStyle = colors[i];
        context.fill();
    }
}

function draw_current_user_results(results) {
    var canvas = document.getElementById("current_user_panel");
    var context = canvas.context;

    for (var i = 0; i < tasks.length; i++) {
        // Show result for each task
    }

    //   center_x = (canvas.width / 2) - size * 7.5;
    //   center_y = (canvas.height / 2) - size * 7.5;

    //   context.beginPath();
    //   context.rect(center_x, center_y, size * 15, size * 15);
    //   if (is_filled) {
    //     context.fillStyle = color;
    //     context.fill();
    //   } else {
    //     context.lineWidth = 1;
    //     context.strokeStyle = color;
    //     context.stroke();
    //   }
}

function draw_average_user_results() {

}
