let contents = [];
let origin_selections = [];
let time_selections = [];
let numberCategories = ["MPG", "Cylinders", "Displacement", "Horsepower", "Weight", "Acceleration"];
let textCategories = ["Car", "Manufacturer", "Origin"];

(function () {
    contents.push({
        "id": "origin-content",
        "content": document.getElementById("origin-content"),
        "button": document.getElementById("origin-btn"),
        "selects": document.getElementById("origin_selects")
    });
    contents.push({
        "id": "time-content",
        "content": document.getElementById("time-content"),
        "button": document.getElementById("time-btn"),
        "selects": document.getElementById("time_selects")
    });

    activate_content('time-content');

    origin_selections.push(document.getElementById('origin1-selection'));
    origin_selections.push(document.getElementById('origin2-selection'));
    time_selections.push(document.getElementById('time1-selection'));
    time_selections.push(document.getElementById('time2-selection'));

    initilize_select(origin_selections, on_origin_select_changed);
    initilize_select(time_selections, on_time_select_changed);
})();

function activate_content(id) {
    contents.map(c => {
        c['content'].classList.remove("show-content");
        c['selects'].classList.remove("show-content");
        c['button'].classList.remove("highlight-button");
        c['content'].classList.add("hide-content");
        c['selects'].classList.add("hide-content");
    });
    contents.filter(
        c => c['id'] === id
    ).map(c => {
        c['content'].classList.remove("hide-content");
        c['selects'].classList.remove("hide-content");
        c['content'].classList.add("show-content");
        c['selects'].classList.add("show-content");
        c['button'].classList.add("highlight-button");
        
        if(id == "origin-content")    {
            // document.getElementById('origin-canvas').addEventListener("click", handle_canvas_click);            
        }
        else if (id == "time-content")    {
            document.getElementById('time-canvas').addEventListener("click", handle_time_canvas_click);
        }
    });

}

function initilize_select(selects, callback){
    let left_categories = copy_array(numberCategories);
    
    selects.map(select => {
        let current = left_categories[0];
        left_categories = left_categories.filter(c => c != current);
    });

    let categories = copy_array(numberCategories);
    selects.map(select => {
        let current = categories[0];
        create_option(select, current);
        categories = categories.filter(c => c != current);
        left_categories.map(c => create_option(select, c));
        select.selectedIndex = 0;
        return select;
    });
    callback(selects);
}

function fill_select(select_id, selections, callback) {
    let left_categories = copy_array(numberCategories);

    selections.map(select => {
        let current = select.options[select.selectedIndex].value;
        left_categories = left_categories.filter(c => c != current);
    });

    let categories = copy_array(numberCategories);
    selections.map(select => {
        let selected = select.options[select.selectedIndex].value;
        select.innerHTML = '';
        create_option(select, selected);
        left_categories.map(c => create_option(select, c));
        select.selectedIndex = 0;
        return select;
    })

    callback(selections);
}