let contents = [];
let content_selections = [];
let numberCategories = ["LKM", "Cylinders", "DisplacementInCCM", "Horsepower", "WeightInKG", "Acceleration", "Model Year"];
let textCategories = ["Car", "Manufacturer", "Origin"];

(function () {
    contents.push({
        "id": "data-content",
        "content": document.getElementById("data-content"),
        "button": document.getElementById("data-btn"),
        "selects": document.getElementById("data-content_selects")
    });

    activate_content('data-content');

    content_selections.push(document.getElementById('x-selection'));
    content_selections.push(document.getElementById('y-selection'));
    content_selections.push(document.getElementById('color-selection'));
    content_selections.push(document.getElementById('form-selection'));

    initilize_select(content_selections, on_select_changed);
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
        
        let parent = document.getElementById("data-table");
        parent.innerHTML = "";
    });

}

function initilize_select(selects, callback) {
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