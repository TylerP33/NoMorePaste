chrome.storage.local.get('color',function(block){
	var color = JSON.parse(block.color)
	$('code').css('background-color', color)
	console.log(color)
});


