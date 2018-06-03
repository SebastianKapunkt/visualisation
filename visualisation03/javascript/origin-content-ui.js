(function () {
    var sizeData = [40, 100, 30];
    var opacityData = [100, 50, 20];
    updateOriginImages(sizeData, opacityData);
})();

function updateOriginImages(sizeData, opacityData) {
    updateImageSize(sizeData);
    updateImageOpacity(opacityData);
}

function updateImageSize(sizeData) {
    var america_picture = document.getElementById('america_picture');
    var europe_picture = document.getElementById('europe_picture');
    var japan_picture = document.getElementById('japan_picture');

    // find max size value
    var maxValue = 0;
    for (i = 0; i < sizeData.length; i++) {
        if (sizeData[i] > maxValue) {
            maxValue = sizeData[i];
        }
    }

    var sizeOfAmerica = maxValue / 100 * sizeData[0]
    var margineSizeOfAmerica = (100 - sizeOfAmerica) / 2;
    var sizeOfEurope = maxValue / 100 * sizeData[1]
    var margineSizeOfEurope = (100 - sizeOfEurope) / 2;
    var sizeOfJapan = maxValue / 100 * sizeData[2]
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
    var maxValue = 0;
    for (i = 0; i < opacityData.length; i++) {
        if (opacityData[i] > maxValue) {
            maxValue = opacityData[i];
        }
    }

    // change img opacity
    america_picture.style.opacity = maxValue / 100 * opacityData[0] / maxValue;
    europe_picture.style.opacity = maxValue / 100 * opacityData[1] / maxValue;
    japan_picture.style.opacity = maxValue / 100 * opacityData[2] / maxValue;
}