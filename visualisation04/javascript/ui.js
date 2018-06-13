let content_selections = [];
let numberCategories = ["LKM", "Cylinders", "DisplacementInCCM", "Horsepower", "WeightInKG", "Acceleration", "Model Year"];
let textCategories = ["Car", "Manufacturer", "Origin"];

(function () {
    content_selections.push(document.getElementById('x-selection'));
    content_selections.push(document.getElementById('y-selection'));
    content_selections.push(document.getElementById('color-selection'));
    content_selections.push(document.getElementById('form-selection'));

    initilize_select(content_selections, on_select_changed);
})();

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