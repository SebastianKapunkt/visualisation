(function () {
    var fileInput = document.getElementById('file_upload');

    fileInput.addEventListener('change', function () {
        var file = fileInput.files[0];

        if (file) {
            if (file.name.match(/\.(txt|json)$/)) {
                var reader = new FileReader();

                reader.onload = function () {
                    console.log(reader.result);
                    read_car_data_from_tab_seperated(reader.result);
                };

                reader.readAsText(file);
            } else {
                alert("File not supported, .txt or .json files only");
            }
        }
    });
})();

function read_car_data_from_tab_seperated(car_string) {
    let lines = car_string.split("\n");
    let cars = [];

    let columns = lines[0].split("	");

    console.log(columns);
    lines.shift();

    lines.map(line => {
        let car = new Map();
        let items = line.split("	");
        for (let i = 0; i < columns.length; i++) {
            car.set(columns[i], items[i]);
        }
        cars.push(car);
    });

    on_cars_loaded(cars, columns);
}