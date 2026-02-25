const newsFeed = document.querySelector(".all-post-container");

const bottomLeftContainer = document.querySelector(".bottom-left-container");
const profileFrdSection = document.querySelector(".profile-frd-section").offsetHeight;

let viewPortHeight = document.documentElement.clientHeight;
let height = Number(viewPortHeight) - Number(bottomLeftContainer.offsetHeight);

bottomLeftContainer.style.top = `${height-10}px`

// variable for counting like,comment,share.
let likeCount = 0;
let commentCount = 0;
let shareCount = 0;


function news_feed_event() {
    // accessing action area's buttons
    const likeBtn = document.querySelectorAll(".left-side-btns .like-btn");
    const commentBtn = document.querySelectorAll(".left-side-btns .comment-btn");
    const shareBtn = document.querySelectorAll(".left-side-btns .share-btn");
    const saveBtn = document.querySelectorAll(".action-area .save-btn");

    // event listener on action buttons
    likeBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            action_btn_effect(btn, "ri-heart-3-line", "ri-heart-3-fill");
        })
    });
    commentBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            action_btn_effect(btn, "ri-chat-3-line", "ri-chat-3-fill");
        })
    });
    shareBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            action_btn_effect(btn, "ri-share-line", "ri-share-fill");
        })
    });
    saveBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            action_btn_effect(btn, "ri-bookmark-2-line", "ri-bookmark-2-fill");
        })
    });
}

// function for changing action btn on click
function action_btn_effect(btn, class_line, class_fill) {
    btn.classList.toggle("active-action-btn");

    if (btn.classList.contains(class_line)) {
        btn.classList.replace(class_line, class_fill);
    }
    else {
        btn.classList.replace(class_fill, class_line);
    }

    let ammount = btn.querySelector("p");
    if (ammount.textContent == "0") {
        ammount.textContent = "1";
    }
    else {
        ammount.textContent = "0";
    }
}

// async function load_feed() {
//     const result = await fetch("news_feed.html");
//     const html = await result.text();
//     newsFeed.innerHTML = html;
//     news_feed_event();
// }

async function load_Components(reference, filePath, bool = false){
    const container = document.querySelector(reference);
    const result = await fetch(filePath);
    const html = await result.text()
    container.innerHTML = html;
    if (bool) {
        news_feed_event();
    }; 
}

load_Components(".all-post-container", "/components/news_feed.html", true);
load_Components("#main-header", "/components/navbar.html");

// load_feed();