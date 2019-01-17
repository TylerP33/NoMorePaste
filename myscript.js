function getColor(key, callback) {
	if (key !== null) {
		chrome.storage.local.get(key, function (obj){
			// $('.pln').css('background-color', block)
			callback(obj)
		});
	}
}


getColor('color', function(color){
	$('.kwd').css('background-color', color.color)
})








