chrome.storage.local.get('color',function(block){
	var gotdata = block.color;
	$("code").css("background-color", gotData)
});

