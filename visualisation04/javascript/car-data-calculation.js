function on_select_changed(selections) {
    // update_for_origin_select(selections[0], updateImageOpacity);
    // update_for_origin_select(selections[1], updateImageSize);
}

// function on_select_changed(selections){
//     let cat = selections[1].options[selections[1].selectedIndex].value
//     let ave = getAverageByTextCategorie(cat, 'Model Year');
//     let cat2 = selections[0].options[selections[0].selectedIndex].value
//     let ave2 = getAverageByTextCategorie(cat2, 'Model Year');
//     let shapeData = [];
//     let colorData = [];
//     Array.from(ave, ([key, value]) => shapeData.push(value));
//     Array.from(ave2, ([key, value]) => colorData.push(value));
//     updateDateGraphic(shapeData, colorData);
// }

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