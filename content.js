
// content.js

function get_tags(){
	var images = document.getElementsByTagName('img'); 
	var srcList = [];
	// get all the images
	for(var i = 0; i < images.length; i++) {
	    srcList.push(images[i].src);
	}

	for(var i = 0; i < images.length; i++) {
	    images[i].alt = "Test";
	}
}


get_tags()



chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
    	get_tags()
    }
  }
);