var rgbToHex = function (rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};

var fullColorHex = function (r, g, b) {
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return red + green + blue;
};

function updateDateGraphic(shapeData, colorData) {
    var canvas = document.getElementById('time-canvas');
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    shapeData = normaleizeData(shapeData, 100);
    colorData = normaleizeData(colorData, 0.8);

    var maxValue = 0;
    for (i = 0; i < shapeData.length; i++) {
        if (shapeData[i] > maxValue) {
            maxValue = shapeData[i];
        }
    }

    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "black";
    // context.moveTo(50, 50);
    // context.lineTo(50, (maxValue) * 2 + 100);
    // context.lineTo(950, (maxValue) * 2 + 100);
    // context.stroke();

    var boxWidth = 800 / 13;
    for (i = 0; i < shapeData.length; i++) {
        context.beginPath();
        var colorValue = parseInt(colorData[i] * 255);
        var color = fullColorHex(colorValue, colorValue, colorValue);
        // console.log(color);
        context.fillStyle = "#" + color.toString();
        context.rect(100 + i * boxWidth, (maxValue + 50) - shapeData[i], boxWidth, shapeData[i] * 2);
        context.fill();
    }
}

