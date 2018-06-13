function updateImageSize(sizeData) {
    var america_picture = document.getElementById('america_picture');
    var europe_picture = document.getElementById('europe_picture');
    var japan_picture = document.getElementById('japan_picture');

    // find max size value
    console.log(sizeData);
    sizeData =  normaleizeData(sizeData, 100);
    

    var sizeOfAmerica = sizeData[0];
    var margineSizeOfAmerica = (100 - sizeOfAmerica) / 2;
    var sizeOfEurope = sizeData[1];
    var margineSizeOfEurope = (100 - sizeOfEurope) / 2;
    var sizeOfJapan = sizeData[2];
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

    opacityData = normaleizeData(opacityData, 0.9)
    
    // change img opacity
    america_picture.style.opacity = opacityData[0];
    europe_picture.style.opacity = opacityData[1];
    japan_picture.style.opacity = opacityData[2];
}