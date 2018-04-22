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
    draw_results(results);
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

function draw_results(results) {

    userResultDataPoints = [results.length];
    refDataPoints = [results.length];
    deviationPoints = [results.length];

    for (i = 0; i < results.length; i++) {
        // data
        var reference_scale = results[i].reference_scale;
        var perceiving_scale = results[i].perceiving_scale;

        var data = perceiving_scale / reference_scale;
        refDataPoints[i] = { x: i + 1, y: data }

        // user result
        var result = parseInt(results[i].user_value);
        if (result == undefined || result == null) {
            result = 0;
        }
        result = result / reference_scale;
        userResultDataPoints[i] = { x: i + 1, y: result }

        // deviation
        deviationPoints[i] = { x: i + 1, y: Math.abs((data - result) / data * 100) }
    }

    var dataChart = new CanvasJS.Chart("dataChartContainer", {
        title: {
            text: "Results"
        },
        data: [
            {
                type: "stepLine",
                showInLegend: true,
                legendText: "Correct answer",
                dataPoints: refDataPoints
            },
            {
                type: "stepLine",
                showInLegend: true,
                legendText: "User results",
                dataPoints: userResultDataPoints
            }
        ]
    });

    var deviationChart = new CanvasJS.Chart("deviationChartContainer", {
        title: {
            text: "Deviation results (in %)"
        },
        data: [
            {
                type: "stepLine",
                showInLegend: true,
                legendText: "User deviation",
                dataPoints: deviationPoints
            },
            // {
            //     type: "stepLine",
            //     showInLegend: true,
            //     legendText: "Average deviation",
            //     dataPoints: 
            // }
        ]
    });

    dataChart.render();
    deviationChart.render();
}
