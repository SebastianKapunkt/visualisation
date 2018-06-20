function drawBarChart(data, keys) {
    let view_div = document.getElementById("view");
    view_div.innerHTML = "";
    var view;

    //set data
    my_schema.data[0].values = data;

    //set keys for axes
    my_schema.scales[0].domain.field = keys[0];
    my_schema.scales[1].domain.field = keys[1];
    my_schema.scales[2].domain.field = keys[3];

    //set axes labes
    my_schema.axes[0].title = keys[0];
    my_schema.axes[1].title = keys[1];
    my_schema.legends[0].title = keys[3];

    my_schema.marks[0].encode.update.x.field = keys[0];
    my_schema.marks[0].encode.update.y.field = keys[1];
    my_schema.marks[0].encode.update.size.field = keys[3];

    tooltips = [
        {"field": keys[0], "type": "ordinal"},
    ]

    my_schema.marks[0].encode.enter.tooltip = tooltips;
    render(my_schema);

    function render(spec) {
        view = new vega.View(vega.parse(spec))
            .renderer('canvas') // set renderer (canvas or svg)
            .initialize('#view') // initialize view within parent DOM container
            .tooltip(new vegaTooltip.Handler().call) // enable tooltips
            .hover() // enable hover encode set processing
            .run();
    }
}