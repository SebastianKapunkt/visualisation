var selections = [];
var loaded_categories = [];
var current_cars = [];

let what = [{
    "category": "A",
    "amount": 28
},
{
    "category": "B",
    "amount": 55
},
{
    "category": "C",
    "amount": 43
},
];

(function () {
    selections.push(document.getElementById('x-selection'));
    selections.push(document.getElementById('y-selection'));
    selections.push(document.getElementById('color-selection'));
    selections.push(document.getElementById('form-selection'));
})();

function initilize_select(selects, callback) {
    let left_categories = copy_array(loaded_categories);

    selects.map(select => {
        let current = left_categories[0];
        left_categories = left_categories.filter(c => c != current);
    });

    let categories = copy_array(loaded_categories);
    selects.map(select => {
        select.innerHTML = '';
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
    let left_categories = copy_array(loaded_categories);

    selections.map(select => {
        let current = select.options[select.selectedIndex].value;
        left_categories = left_categories.filter(c => c != current);
    });

    let categories = copy_array(loaded_categories);
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