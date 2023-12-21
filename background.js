chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action === "downloadArticle") {
            chrome.downloads.download({
                url: request.url,
                filename: request.filename // e.g., "article.pdf"
            });
        }
    }
);
