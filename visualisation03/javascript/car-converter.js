let lines = car_data.split("\n");
let cars = [];

lines.map(l => {
    items = l.split("	");
    var object = {
        "Car": items[0],
        "Manufacturer": items[1],
        "MPG": items[2],
        "Cylinders": items[3],
        "Displacement": items[4],
        "Horsepower": items[5],
        "Weight": items[6],
        "Acceleration": items[7],
        "Model Year": items[8],
        "Origin": items[9],
        "LKM": null,
        "DisplacementInCCM": null,
        "WeightInKG": null,
    };
    cars.push(object);
});

cars = cars.filter(car => car['Car'] &&  car['Car']!='Car');
let american_cars = cars.filter(car => car['Origin'] === "American");
let european_cars = cars.filter(car => car['Origin'] === "European");
let japanese_cars = cars.filter(car => car['Origin'] === "Japanese");


cars.forEach(element => {
    if (element.MPG != null && element.MPG != "NA") {
        element.LKM = 235 / element.MPG;
    }
    if (element.Displacement != null && element.Displacement != "NA") {
        element.DisplacementInCCM = element.Displacement * 16.387;
    }
    if (element.Weight != null && element.WeightInKG != "NA") {
        element.WeightInKG = element.Weight * 0.4536;
    }
});