window.onload=function(){getChange(), getColor()}
let array = []


const getChange = (callback) => {
	let color;
	 $('input[type=checkbox]').change(function() {
	 	if (this.checked) {
	 		array.push($(this).attr('id'))
	 	} else if(array.includes($(this).attr('id'))){
	 		let index = array.indexOf($(this).attr('id'))
	 		array.splice(index)
	 		console.log(array)
	 	} else{
	 		return false
	 	}
     	 	chrome.storage.local.set({
    			'checked': array,
		});
   	});
}



var color = 'color'
const getColor = () => {
	let spans = $('span')
	for (let i = 0; i < spans.length; i++){
		spans[i].addEventListener("click", function(e) {
			color = e.target.style.backgroundColor
			e.target.style.backgroundColor
		if (array.length)
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


