window.onload=function(){getChange(), getColor()}

const getChange = () => {
	let array = []
	let color;
	 $('input[type=checkbox]').change(function() {
	 	if (this.checked) {
	 		array.push($(this).attr('id'))
	 	} else if(array.includes($(this).attr('id'))){
	 		let index = array.indexOf($(this).attr('id'))
	 		array.splice(index)
	 	} else{
	 		return false
	 	}
	 	console.log(array)
     	 	chrome.storage.local.set({
    			'checked': array,
		});
   	});
}


const getColor = () => {
	let spans = $('span')
	for (let i = 0; i < spans.length; i++){
		spans[i].addEventListener("click", function(e) {
			color = e.target.style.backgroundColor
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


