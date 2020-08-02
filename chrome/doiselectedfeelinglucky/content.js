chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
		//alert("called.");
        if(request.method == "getText"){
            sendResponse({data: document.all[0].innerText, method: "getText"}); //same as innerText
        }
    }
);
