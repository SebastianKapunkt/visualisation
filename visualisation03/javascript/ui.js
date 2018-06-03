contents = [];
selections = [];
let numberCategories = ["MPG", "Cylinders", "Displacement", "Horsepower", "Weight", "Acceleration", "Model Year"];
let textCategories = ["Car", "Manufacturer", "Origin"];

(function () {
    contents.push({
        "id": "origin-content",
        "content": document.getElementById("origin-content"),
        "button": document.getElementById("origin-btn")
    });
    contents.push({
        "id": "time-content",
        "content": document.getElementById("time-content"),
        "button": document.getElementById("time-btn")
    });

    activate_content('origin-content');

    selections.push(document.getElementById('attribute1-selection'));
    selections.push(document.getElementById('attribute2-selection'));

    initilize_select();
})();

function activate_content(id) {
    contents.map(c => {
        c['content'].classList.remove("show-content");
        c['button'].classList.remove("highlight-button");
        c['content'].classList.add("hide-content");
    });
    contents.filter(
        c => c['id'] === id
    ).map(c => {
        c['content'].classList.remove("hide-content");
        c['content'].classList.add("show-content");
        c['button'].classList.add("highlight-button");
    });
}

function initilize_select(){
    let left_categories = copy_array(numberCategories);
    
    selections.map(select => {
        let current = left_categories[0];
        left_categories = left_categories.filter(c => c != current);
    });

    let categories = copy_array(numberCategories);
    selections.map(select => {
        let current = categories[0];
        create_option(select, current);
        categories = categories.filter(c => c != current);
        left_categories.map(c => create_option(select, c));
        select.selectedIndex = 0;
        return select;
    });
    on_select_changed(selections);
}

function fill_select(select_id) {
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

    on_select_changed(selections);
}