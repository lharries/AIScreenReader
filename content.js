
// content.js
var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log(firstHref);


var images = document.getElementsByTagName('img'); 
var srcList = [];
// get all the images
for(var i = 0; i < images.length; i++) {
    srcList.push(images[i].src);
}

for(var i = 0; i < images.length; i++) {
    images[i].alt = "Test";
}

console.log(srcList)