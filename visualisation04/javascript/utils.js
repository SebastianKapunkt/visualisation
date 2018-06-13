function copy_array(a) {
    let b = Array(a.length);
    i = a.length;
    while (i--) b[i] = a[i];
    return b;
};

function create_option(select, value) {
    var option = document.createElement('option');
    option.innerHTML = value;
    option.value = value;
    select.appendChild(option);
    return value;
}

function normaleizeData(data, ref) {
    let max = data.reduce(function (a, b) {
        return Math.max(a, b);
    });
    let scale_factore = ref / max;
    data = data.map(item => item * scale_factore);
    return data;
}

function drawDataTable(cars) {
    let parent = document.getElementById("data-table");
    parent.innerHTML = "";
    let row = parent.insertRow(-1);
    row.insertCell(-1).innerHTML = 'Origin';
    row.insertCell(-1).innerHTML = 'Model Year';
    row.insertCell(-1).innerHTML = 'Car';
    row.insertCell(-1).innerHTML = 'Manufacturer';
    row.insertCell(-1).innerHTML = 'MPG';
    row.insertCell(-1).innerHTML = 'LKM';
    row.insertCell(-1).innerHTML = 'Cylinders';
    row.insertCell(-1).innerHTML = 'Displacement';
    row.insertCell(-1).innerHTML = 'DisplacementInCCM';
    row.insertCell(-1).innerHTML = 'Horsepower';
    row.insertCell(-1).innerHTML = 'Acceleration';
    row.insertCell(-1).innerHTML = 'Weight';
    row.insertCell(-1).innerHTML = 'WeightInKG';

    cars.map(car => {
        let row = parent.insertRow(-1);
        row.insertCell(-1).innerHTML = car['Origin'];
        row.insertCell(-1).innerHTML = car['Model Year'];
        row.insertCell(-1).innerHTML = car['Car'];
        row.insertCell(-1).innerHTML = car['Manufacturer'];
        row.insertCell(-1).innerHTML = car['MPG'];
        row.insertCell(-1).innerHTML = car['LKM'] === null ? '' : car['WeightInKG'].toFixed(2);
        row.insertCell(-1).innerHTML = car['Cylinders'];
        row.insertCell(-1).innerHTML = car['Displacement'];
        row.insertCell(-1).innerHTML = car['DisplacementInCCM'] === null ? '' : car['WeightInKG'].toFixed(2);
        row.insertCell(-1).innerHTML = car['Horsepower'];
        row.insertCell(-1).innerHTML = car['Acceleration'];
        row.insertCell(-1).innerHTML = car['Weight'];
        row.insertCell(-1).innerHTML = car['WeightInKG'] === null ? '' : car['WeightInKG'].toFixed(2);
    });
}

function drawOriginTable(filter) {
    let cars_copy = copy_array(cars);
    cars_copy = cars_copy.filter(
        x => {
            return x['Origin'] == filter;
        });
    drawDataTable(cars_copy);
}

function drawTimeTable(filter){
    let cars_copy = copy_array(cars);
    cars_copy = cars_copy.filter(
        x => {
            return x['Model Year'] == filter;
        });
    drawDataTable(cars_copy);
}