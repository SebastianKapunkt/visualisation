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

(function () {
    var shapeData = [40, 100, 30, 23, 34, 45, 56, 67, 67, 67, 45];
    var colorData = [0.8, 0.7, 0.6, 0.3, 0.4, 0.2, 0.45, 0.3, 0.4, 0.2, 0.7];
    updateDateGraphic(shapeData, colorData);
})();

function updateDateGraphic(shapeData, colorData) {
    var canvas = document.getElementById('time-canvas');
    var context = canvas.getContext("2d");

    var maxValue = 0;
    for (i = 0; i < shapeData.length; i++) {
        if (shapeData[i] > maxValue) {
            maxValue = shapeData[i];
        }
    }

    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.moveTo(80, 50);
    context.lineTo(80, (maxValue) * 2 + 100);
    context.lineTo(950, (maxValue) * 2 + 100);
    context.stroke();

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

