window.onload=function(){grabData(), getChange()}

const getChange = () => {
	 $('input[type=checkbox]').change(function() {
     	 console.log($(this).attr('id'))
   });
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
const grabData = () => {
	let spans = $('span')
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



