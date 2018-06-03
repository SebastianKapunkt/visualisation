function getAverageByOriginFor(category) {

    var americanAverage, europeanAverage, japaneseAverage;

    var values = [getValues(american_cars, category), getValues(american_cars, category), getValues(american_cars, category)];

    var sum = 0;
    for (i = 0; i < values.length; i++) {
        for (j = 0; j < values[i].length; j++) {

            sum += values[i][j];
        }

        if (i == 0) {
            americanAverage = sum / values[i].length;
        }
        else if (i == 1) {
            europeanAverage = sum / values[i].length;
        }
        else if (i == 2) {
            japaneseAverage = sum / values[i].length;
        }

        sum = 0;
    }

    return {
        americanAverage: americanAverage,
        europeanAverage: europeanAverage,
        japaneseAverage: japaneseAverage
    }
}

function getValues(array, category) {
    switch (category) {
        case "Car":
            return array.map(x => x.Car);
        case "Manufacturer":
            return array.map(x => x.Manufacturer);
        case "MPG":
            return array.map(x => x.MPG);
        case "Cylinders":
            return array.map(x => x.Cylinders);
        case "Displacement":
            return array.map(x => x.Displacement);
        case "Horsepower":
            return array.map(x => x.Horsepower);
        case "Weight":
            return array.map(x => x.Weight);
        case "Acceleration":
            return array.map(x => x.Acceleration);
        case "Model Year":
            return array.map(x => x.ModelYear);
        case "Origin":
            return array.map(x => x.Origin);
        default:
            return null;
    }
}