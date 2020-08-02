let institutionDomain = 'st-andrews.ac.uk'
chrome.commands.onCommand.addListener(
function(command) {
	// This command may be bound to a key for convenient use of extension 
	// See manifest.json
	if(command === "ezproxyGo") {
		// Copy of functionality in ezproxy.js
		// Get currently active tab (tabs[0])
		chrome.tabs.query(
			{currentWindow: true, active: true}, 
			function (tabs) {
			// regex pattern to match domain name to be adjusted
			let re = /(?<=https?:\/\/)([^/]*)(?=\/)/;
			// Current url
			let tabUrl = tabs[0].url;
			// Replace domain name with domain name + ezproxy
			tabUrl = tabUrl.replace(re, (match) => { return match + '.ezproxy.' + institutionDomain;} );
			// Navigate to the new url
			chrome.tabs.update(tabs[0].id, {url: tabUrl});
			}
		);
	}
});
