function on_select_changed(selections){
    selections.map(select => {
        let category = select.options[select.selectedIndex].value;
        console.log("============" + category + "============");
        console.log(getAverageByOriginFor(category));
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

function reduceSum(a, b){
    return Number(a) + Number(b);
}

function getValues(array, category) {
    return array
    .map(x => x[category])
    .filter(x => !isNaN(x))
}