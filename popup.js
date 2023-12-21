document.getElementById('downloadButton').addEventListener('click', function() {
    // Logic to trigger content script for scraping and downloading
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "scrapeArticle"});
    });
});
