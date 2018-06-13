function drawBarChart(data) {
    let view_div = document.getElementById("view");
    view_div.innerHTML = "";
    var view;

    my_schema.data[0].values = data;
    render(my_schema);

    function render(spec) {
        view = new vega.View(vega.parse(spec))
            .renderer('canvas') // set renderer (canvas or svg)
            .initialize('#view') // initialize view within parent DOM container
            .hover() // enable hover encode set processing
            .run();
    }
}