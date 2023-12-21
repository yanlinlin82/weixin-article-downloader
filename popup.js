console.log('popup.js loaded')

document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get(['articles'], function(result) {
        if (result.articles && result.articles.length > 0) {
            displayArticles(result.articles);
        } else {
            console.log("No articles found in storage.");
        }
    });
});

function displayArticles(articles) {
    const container = document.getElementById('articles-container');
    articles.forEach(article => {
        const div = document.createElement('div');
        div.setAttribute('class', 'article-item');
        const title = document.createTextNode(article.title);
        const link = document.createElement('a');
        link.href = article.url;
        link.appendChild(title);
        div.appendChild(link);
        container.appendChild(div);
    });
}

document.getElementById('downloadButton').addEventListener('click', function() {
    alert('not implemented yet')
})