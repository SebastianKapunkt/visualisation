var contentBoxSizes = [];

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


    var xPosition = 0;
    var yPosition = 0;
    var boxWidth = 800 / 13;
    var boxHeight = 0;

    var currentBoxYPostion = 0;
    for (i = 0; i < shapeData.length; i++) {

        xPosition = timeContentLeftMagine + currentBoxYPostion;
        yPosition = (maxValue + 50) - shapeData[i];
        boxHeight = shapeData[i] * 2;

        context.beginPath();
        var colorValue = parseInt(colorData[i] * 255);
        var color = fullColorHex(colorValue, colorValue, colorValue);

        contentBoxSizes[i] = {x: xPosition, y: yPosition, w: boxWidth, h: boxHeight};
        // console.log(color);
        context.fillStyle = "#" + color.toString();
        context.rect(xPosition, yPosition, boxWidth, boxHeight);
        context.fill();

        currentBoxYPostion += boxWidth;
    }
}

let timeContentLeftMagine = 100;

function handle_time_canvas_click(){
    var canvas = document.getElementById('time-canvas');    
    var rect = canvas.getBoundingClientRect();
    cursor_x = event.clientX - rect.left;
    cursor_y = event.clientY - rect.top;

    var currentWidth = 0;
    for(i = 0; i < contentBoxSizes.length; i++)
    {
        if(contentBoxSizes[i].x < cursor_x 
            && contentBoxSizes[i].x + contentBoxSizes[i].w > cursor_x
            && contentBoxSizes[i].y < cursor_y
            && contentBoxSizes[i].y + contentBoxSizes[i].h > cursor_y ) {
            // TODO Show cars of year i (0 = 72)
            console.log(i);
            drawTimeTable(70 + i);
        }
        currentWidth += contentBoxSizes[i].x;
    }
}

