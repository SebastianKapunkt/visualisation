function on_select_changed(selections) {
    selections.map(select => {
        let category = select.options[select.selectedIndex].value;
        console.log("============" + category + "============");
        // console.log(getAverageByOriginFor(category));
        console.log(getAverageByTime(category));
    });
}

function getAverageByOriginFor(category) {

    var americanAverage, europeanAverage, japaneseAverage;

    var values = [getValues(american_cars, category), getValues(european_cars, category), getValues(japanese_cars, category)];

    americanAverage = values[0].reduce(reduceSum) / values[0].length;
    europeanAverage = values[1].reduce(reduceSum) / values[1].length;
    japaneseAverage = values[2].reduce(reduceSum) / values[2].length;

    return {
        americanAverage: americanAverage,
        europeanAverage: europeanAverage,
        japaneseAverage: japaneseAverage
    }
}

function getAverageByTime(category) {
    let time_car_map = [];
    let sum_amoun_map = new Map();
    let average_by_year = new Map();

    cars.map(car => {
        time_car_map.push({
            "year": car['Model Year'],
            "values": car
        });
    });
    time_car_map
        .filter(value => !isNaN(value['values'][category]))
        .map(value => {
            if(sum_amoun_map.has(value['year'])){
                sum_amoun_map.set(
                    value['year'],
                    {
                        "sum": sum_amoun_map.get(value['year'])['sum'] + Number(value['values'][category]),
                        "amount": sum_amoun_map.get(value['year'])['amount'] + 1
                    }
                );
            }else{
                sum_amoun_map.set(
                    value['year'],
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

function reduceSum(a, b) {
    return Number(a) + Number(b);
}

function getValues(array, category) {
    return array
        .map(x => x[category])
        .filter(x => !isNaN(x))
}