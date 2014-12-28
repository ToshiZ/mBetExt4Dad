jQuery.noConflict();                               
jQuery(document).ready(function ($) {
	var mtTabId,
		csId,
		ticketsJson;
	chrome.browserAction.onClicked.addListener(function() {
		chrome.tabs.create({'url': "MBExt.html", 'active': false}, function(tab){
		mtTabId = tab.id;
		});
	});
	/* chrome.runtime.onMessage.addListener(
				 function(request, sender, sendResponse) {	
					if(sender.id == mtTabId)
						sendResponse({askFor: 'tickets', tickets: JSON.stringify(request.tickets)});					
				}
		); */
	chrome.runtime.onMessage.addListener(
		 function(request, sender, sendResponse) {		
			if (request.askFor == "mtId"){
				csId = sender.tab.id;
				//sendResponse(JSON.stringify({mtId: mtTabId}));
				sendResponse({mtId: mtTabId});
			}
		});
});