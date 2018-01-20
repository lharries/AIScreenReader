// content.js


function getImageCaptions(dataToSend) {
    var xhr = new XMLHttpRequest();

    // handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.responseText);

            try {
                /*
                Response format:
                {
                    url: alt,
                    url2: atl2
                }
                 */

                var response = JSON.parse(xhr.responseText);

                for (var el in imgElements) {
                    imgElements[el].alt = response[imgElements[el].src] || "No caption found"
                }

            } catch (err) {
                console.error("Unable to parse", err);
            }
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
        if ((!images[i].alt || !images[i].alt.length) && images[i].src.length) {
            imgElements.push(images[i]);
            srcList.push({url: images[i].src, alt: null});
        }
    }
    return srcList;
}


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
    	getImageCaptions(dataToSend())
    }
  }
);

var imgElements = [];
var srcList = getImages();
// getImageCaptions(srcList)
console.log(srcList);
console.log(imgElements);

