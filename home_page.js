
// accessing newsfeed area
const allPostContainer = document.querySelector(".all-post-container");
const postWritingSection = document.querySelector("#news-feed-main-container .post-writing-section");

// accessing btn from navbar
const homeBtn = document.querySelector(".nav-btn-area .ri-home-7-line");
const peopleBtn = document.querySelector(".nav-btn-area .ri-user-3-line");


// function for loading newsfeed-content in the newsfeed area
async function loadNewsFeed() {
    postWritingSection.style.display = "flex";
    const result = await fetch("news_feed.html");
    const html = await result.text();
    allPostContainer.innerHTML = html;

    news_feed_event();
}

// function for loading newsfeed-content in the newsfeed area
async function loadPeople() {
    const result = await fetch("people.html");
    const html = await result.text();
    allPostContainer.innerHTML = `<br>${html}`;
    postWritingSection.style.display = "none";
}


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
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    btn.classList.toggle("active-action-btn");

    if (btn.classList.contains(class_line)) {
        btn.classList.replace(class_line, class_fill);
    }
    else {
        btn.classList.replace(class_fill, class_line);
    }

    let ammount = btn.querySelector("p");
    if (ammount.textContent == "0") {
        ammount.textContent = randomNumber;
    }
    else {
        ammount.textContent = "0";
    }
}

loadNewsFeed();

homeBtn.addEventListener("click", () => {
    loadNewsFeed()
});
peopleBtn.addEventListener("click", () => {
    loadPeople()
});


