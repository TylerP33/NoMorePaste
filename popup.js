window.onload=function(){grabData(), changeHandler()}

function grabData() {
	let spans = document.getElementsByTagName('span')
	for (let i = 0; i < spans.length; i++){
		spans[i].addEventListener("click", function(e) {
			let color = e.target.style.backgroundColor
				chrome.storage.local.set({
    				'color': color
				}, function () {
    				chrome.tabs.executeScript({
        			file: "myscript.js"
    			});
			});
		});
	}
}


function changeHandler(){
     var checkedList = document.querySelectorAll("input[name^='item[']:checked")
     console.log(checkedList)
}
