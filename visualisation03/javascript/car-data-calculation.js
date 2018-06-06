function on_select_changed(selections) {
    update_for_select(selections[0], updateImageOpacity);
    update_for_select(selections[1], updateImageSize);

    // selections.map(select => {
    //     let category = select.options[select.selectedIndex].value;
    //     console.log("============" + category + "============");
    //     console.log(getAverageByTextCategorie(category, 'Model Year'));
    //     console.log(getAverageByTextCategorie(category, 'Origin'));
    // });
}

function update_for_select(select, callback){
    let select_category = select.options[select.selectedIndex].value;
    let select_average = getAverageByTextCategorie(select_category, 'Origin');

    var data = [
        select_average.get('American'), //america
        select_average.get('European'), //europe
        select_average.get('Japanese') //japan
    ];
    
    console.log(data);

    callback(data);
}

function getAverageByTextCategorie(category, damn) {
    let time_car_map = [];
    let sum_amoun_map = new Map();
    let average_by_year = new Map();

    cars.map(car => {
        time_car_map.push({
            "key": car[damn],
            "values": car
        });
    });
    time_car_map
        .filter(value => !isNaN(value['values'][category]))
        .map(value => {
            if(sum_amoun_map.has(value['key'])){
                sum_amoun_map.set(
                    value['key'],
                    {
                        "sum": sum_amoun_map.get(value['key'])['sum'] + Number(value['values'][category]),
                        "amount": sum_amoun_map.get(value['key'])['amount'] + 1
                    }
                );
            }else{
                sum_amoun_map.set(
                    value['key'],
                    {
                        "sum": Number(value['values'][category]),
                        "amount": 1
                    }
                );
            }
        });
    sum_amoun_map.forEach( 
        (val, key) => {
            average_by_year.set(key, val['sum'] / val['amount']);
        }
    );
    return average_by_year;
}