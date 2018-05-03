function calculate_result_and_draw(results, questions) {
    var data_points = results.map(result => {
        var x_pow = Math.pow(Math.abs(result.x - result.target_x), 2);
        var y_pow = Math.pow(Math.abs(result.y - result.target_y), 2);
        var question = questions.filter(question => question.id == result.id)[0];
        return {
            x: result.id + 1,
            y: result.time,
            z: Math.sqrt(x_pow + y_pow),
            label: question.features
        }
    });

    bla(data_points);
}

function bla(data_points) {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "perception time & hit accuracy"
    },
    axisX: {
      title: "used features",
      maximum: data_points.length + 1,
      minimum: 0
    },
    axisY: {
      title: "perception time",
      gridColor: "lightgrey",
      tickColor: "lightgrey",
      interval: 50
    },
    data: [
      {
        type: "bubble",
        toolTipContent:
          "Used features: {label}<br/>Time needed: {y}<br/> Pixel distance to actual point: {z}",
        dataPoints: data_points
      }
    ]
  });
  chart.render();
}
