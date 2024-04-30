// background.js
chrome.action.onClicked.addListener(function(tab) {
    closeDuplicateTabs();
});

function closeDuplicateTabs() {
    chrome.tabs.query({}, function(tabs) {
        let urls = new Set();
        tabs.forEach(tab => {
            if (urls.has(tab.url)) {
                chrome.tabs.remove(tab.id);
            } else {
                urls.add(tab.url);
            }
        });
    });
}
