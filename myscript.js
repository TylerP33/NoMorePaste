function getColor(key, globalColor, callback) {
	if (key !== null) {
		chrome.storage.local.get(key, function (obj){
			// $('.pln').css('background-color', block)
			callback(obj)
		});
	}
}

var globalColor;
getColor('color', globalColor, function(color){
	globalColor = color.color
})

var globalChecked;
getColor('checked', globalChecked, function(checked){
	globalChecked = checked
})

if (globalChecked['checked'] !== undefined || globalChecked['checked'].length >= 1){
	$(`${globalChecked['checked'][globalChecked['checked'].length - 1]}`).css('background-color', globalColor)
} else{
	console.log('this is undefined')
}






