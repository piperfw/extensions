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
			//alert("Unable to find a doi in current selection.");
			return 1;
		}
		// First full match is in match[0], use this to construct a doi url
		let doiString = match[0];
		let doiUrl = "https://doi.org/" + doiString;
		// Point current tab to doi url and go
		chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
		chrome.tabs.update(tabs[0].id, {url: doiUrl});});
	}
);
