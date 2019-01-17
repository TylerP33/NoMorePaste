let color = document.getElementById('test')
console.log(color)
chrome.storage.local.set({
    color: color
}, function () {
    chrome.tabs.executeScript({
        file: "myscript.js"
    });
});