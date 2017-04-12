function getCurrentTabUrl() {
	var url = '';
	var queryInfo = {
		active: true,
		currentWindow: true
	};
	chrome.tabs.query(queryInfo, function(tabs) {
		var currentTab = tabs[0];
		url = currentTab.url;
	});
	return url;
}

function currentTabAlert(message) {
	chrome.tabs.executeScript({
		code: 'alert("test");'
	});
}

function isBitbucketUrl(url) {
	return url.match(/http[s]?:\/\/git.tools.nintex.com\/.*\/overview.*/);
}

function doStuff() {
	debugger;
	//var url = getCurrentTabUrl();
	
	var data = {};
	if (true || isBitbucketUrl(url)) {
		data = {success: true, action: 'updateBitbucketTimestamps'};
	} else {
		data = {success: false, message: 'Invalid page.'};
	}
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var tab = tabs[0];
		chrome.tabs.sendRequest(tab.id, data, function(response) {});
	});
	
	/*if (isBitbucketUrl(currentTab.url)) {
		jQuery("time").each(function () { jQuery(this).html(jQuery(this).attr("title")); });
	} else {
		currentTabAlert('Invalid page.')
	}*/
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('bitbucketTimestampButton').addEventListener('click', doStuff);

	//chrome.tabs.executeScript(null, {file: "jquery-3.1.1.min.js"});
	//chrome.tabs.executeScript(null, {file: "content.js"});
	/*getCurrentTabUrl(function(tab) {
		currentTab = tab;
	});*/
});