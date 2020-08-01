let institutionDomain = 'st-andrews.ac.uk'
new Promise((resolve, reject) => {
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
	//let re = /https?:\/\/((.)*)(?=\/)/;
	let re = /(?<=https?:\/\/)([^/]*)(?=\/)/;
	let tabUrl = tabs[0].url;
	tabUrl = tabUrl.replace(re, (match) => { return match + '.ezproxy.' + institutionDomain;} );
 	console.error(tabUrl);
	chrome.tabs.update(tabs[0].id, {url: tabUrl});
	resolve("url updated");
});
})
.finally(() => window.close());
