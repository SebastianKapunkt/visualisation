let lines = car_data.split("\n");
let cars = [];

let american_cars = [], european_cars = [], japanese_cars = [];

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
        "Origin": items[9]
    };
    cars.push(object);
});

cars = cars.filter(car => car['Car'] &&  car['Car']!='Car');

console.log(cars);