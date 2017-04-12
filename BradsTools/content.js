chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	debugger;
	if (!request.success) {
		alert(request.message);
		return;
	}
		
	if (request.action === 'updateBitbucketTimestamps') {
		jQuery("time").each(function () { jQuery(this).html(jQuery(this).attr("title")); });
	}
	
	//sendResponse({test: request.test + 'GOT IT!!!'});
});
