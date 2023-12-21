console.log('content.js loaded')

records = document.getElementsByClassName("publish_record_index")
if (records.length === 0) {
    records = document.getElementsByClassName("publish_record_history")
}

var article_data = []
const articles = records[0].getElementsByClassName("weui-desktop-mass-appmsg__title")
for (const article of articles) {
    url = article.getAttribute('href')
    title = article.getElementsByTagName('span')[0].innerText
    article_data.push({title: title, url: url})
}
chrome.storage.local.set({ articles: article_data }, function() {
    console.log("Articles are saved in storage.");
})