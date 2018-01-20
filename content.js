var images = document.getElementsByTagName('img'); 
var srcList = [];
// get all the images
for(var i = 0; i < images.length; i++) {
    srcList.push(images[i].src);
}

for(var i = 0; i < images.length; i++) {
    images[i].alt = "Test";
}

