function getImageCaptions(dataToSend) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(alt, xhr.responseText);
            // get the array of captions from the response text
        }
    }
    xhr.open('POST', 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699', true);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xhr.send(dataToSend);
}

function getImages() {
    var images = document.getElementsByTagName('img');
    var srcList = [];
    // get all the images
    for (var i = 0; i < images.length; i++) {
        if ((!images[i].alt ||  !images[i].alt.length) && images[i].src.length) {
            console.log(images[i])
            srcList.push({url: images[i].src, alt: null});
        }
    }
    return srcList;
}

var images = getImages();
console.log(images);
// addImageCaption();