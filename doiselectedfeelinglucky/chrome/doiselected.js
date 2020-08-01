function closePopup(tabId, changeInfo, tabInfo) {
		window.close();
}
// Firstly get all text in page, in case we need that
new Promise((resolve, reject) => {
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {method: "getText"}, function(response) {
        if(response.method=="getText"){
            let allText = response.data;
			resolve(allText);
        }
    });
});
}) // Then get selected text, and use that if it contains a doi
.then((result) => {
chrome.tabs.executeScript(
	// Get object in PRIMARY (selection) and do something to it 
	{code: "window.getSelection().toString();"},
	// Text in selection[0]
	function(selection) {
		// regex pattern to pick out DOIs - should work
		// in most cases (credit: https://stackoverflow.com/a/10324802)
		let re = /\b(10[.][0-9]{4,}(?:[.][0-9]+)*\/(?:(?!["&'])\S)+)\b/;
		let selString = selection[0];
		let match = re.exec(selString);
		if (match === null) {
			//console.error(result);
			match = re.exec(result);
		}
		if (match === null) {
			alert("No doi string found.");
			return 1;
		}
		// First full match is in match[0], use this to construct a doi url
		let doiString = match[0];
		let doiUrl = "https://doi.org/" + doiString;
		// Point current tab to doi url and go
		chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
		// Close popup, but only once action is complete
		chrome.tabs.onUpdated.addListener(closePopup);
		chrome.tabs.update(tabs[0].id, {url: doiUrl});});
	}
);
})
