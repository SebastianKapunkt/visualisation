function updateImageSize(sizeData) {
    var america_picture = document.getElementById('america_picture');
    var europe_picture = document.getElementById('europe_picture');
    var japan_picture = document.getElementById('japan_picture');

    // find max size value
    var maxValue = sizeData.reduce(function(a, b) {
        return Math.max(a, b);
    });

    var scale_factor = 100/maxValue;

    var sizeOfAmerica = sizeData[0] * scale_factor;
    var margineSizeOfAmerica = (100 - sizeOfAmerica) / 2;
    var sizeOfEurope = sizeData[1] * scale_factor
    var margineSizeOfEurope = (100 - sizeOfEurope) / 2;
    var sizeOfJapan = sizeData[1] * scale_factor
    var margineSizeOfJapan = (100 - sizeOfJapan) / 2;

    // update img size
    america_picture.style.width = sizeOfAmerica.toString() + "%";
    america_picture.style.marginLeft = margineSizeOfAmerica.toString() + "%";
    america_picture.style.marginTop = margineSizeOfAmerica.toString() + "%";
    europe_picture.style.width = sizeOfEurope.toString() + "%";
    europe_picture.style.marginLeft = margineSizeOfEurope.toString() + "%";
    europe_picture.style.marginTop = margineSizeOfEurope.toString() + "%";
    japan_picture.style.width = sizeOfJapan.toString() + "%";
    japan_picture.style.marginLeft = margineSizeOfJapan.toString() + "%";
    japan_picture.style.marginTop = margineSizeOfJapan.toString() + "%";
}

function updateImageOpacity(opacityData) {
    var america_picture = document.getElementById('america_picture');
    var europe_picture = document.getElementById('europe_picture');
    var japan_picture = document.getElementById('japan_picture');

    // find max opacity value
    var maxValue = opacityData.reduce(function(a, b) {
        return Math.max(a, b);
    });

    var scale_factor = 1 / maxValue;

    // change img opacity
    america_picture.style.opacity = opacityData[0] * scale_factor;
    europe_picture.style.opacity = opacityData[1] * scale_factor;
    japan_picture.style.opacity = opacityData[2] * scale_factor;
}