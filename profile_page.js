const newsFeed = document.querySelector(".news-feed");


async function load_feed(){
    const result = await fetch("news_feed.html");
    const html = await result.text();
    newsFeed.innerHTML = html;
}

load_feed();