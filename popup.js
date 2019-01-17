window.onload=function(){grabData()}

function grabData() {
	let color = document.getElementById('test')
	chrome.storage.local.set({
    		'color': color.style.backgroundColor
		}, function () {
    		chrome.tabs.executeScript({
        	file: "myscript.js"
    	});
	});

}



