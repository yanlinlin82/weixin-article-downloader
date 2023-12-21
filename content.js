function scrapeArticleData() {
    // Logic to scrape the article data goes here
    // For example, document.querySelector to get article elements
}

// When ready, send the article data to the background script
chrome.runtime.sendMessage({
    action: "downloadArticle",
    url: articleUrl,
    filename: "article.pdf" // Or another format as needed
});
