function getImageCaption(element) {
    var xhr = new XMLHttpRequest();

    // handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(element);
            console.log(xhr.responseText);

            try {
                var response = JSON.parse(xhr.responseText);
                if (response && response.alt) {
                    element.alt = response.alt;
                }

            } catch (err) {
                // setTimeout(function () {
                //     console.log("running timeout")
                //     getImageCaption(element)
                // }, 3000);
                console.error("Unable to parse", err);
            }
            // get the array of captions from the response text
        }
    }
    xhr.open('POST', 'https://np3qle1w72.execute-api.eu-west-1.amazonaws.com/prod/imageAnalysisFinal', true);
    xhr.setRequestHeader("Content-Type", "application/json");
    var obj = {image: element.src};
    xhr.send(JSON.stringify(obj));
}

function getImages() {
    var images = document.getElementsByTagName('img');
    // get all the images
    for (var i = 0; i < images.length; i++) {
        if ((!images[i].alt || !images[i].alt.length) && images[i].src.length) {
            imgElements.push(images[i]);
        }
    }
}

function init() {
    getImages();

    for (var el in imgElements) {
        // disallow pictures with numbers at the end to stop excess images on medium
        if (imgElements[el].src.match(/(https?:\/\/.*[^0-9][^0-9]$)/i)) {
            getImageCaption(imgElements[el]);
        }
    }
}

console.log("running");
var imgElements = [];
init();

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            init();
        }
    }
);

