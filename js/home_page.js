load_components(".all-post-container","/components/news_feed.html", true);



// accessing newsfeed area
const allPostContainer = document.querySelector(".all-post-container");
const postWritingSection = document.querySelector("#news-feed-main-container .post-writing-section");



// accessing btn for floating chat icon, box
const chatIcon = document.querySelector(".floating-chat-icon");
const chatBoxPopup = document.querySelector(".floating-chat-box");
const chatClose = document.querySelector(".chat-header .ri-close-circle-line");
const userPrompt = document.querySelector(".chat-input input");
const sendBtn = document.querySelector(".chat-input button");

// accessing newsfeed area
const sortingArea = document.querySelector(".sorting-area");



/* function for loading components in pages */
async function load_components(reference, filePath, bool = false){
    const container = document.querySelector(reference);
    const result = await fetch(filePath);
    const html = await result.text()
    container.innerHTML = html;
    if (bool) {
        news_feed_event();
    }; 
}



// function for loading newsfeed-content in the newsfeed area
async function loadGroup() {
    // accessing main gird area
    // const postArea = document.querySelector("#news-feed-main-container");
    const result = await fetch("group_page.html");
    const html = await result.text();
    allPostContainer.innerHTML = html;
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

// function for getting reply
async function puterBot(prompt) {
    const chatBody = document.querySelector(".chat-body");

    const response = await puter.ai.chat(prompt);
    chatBody.textContent = response.messsage
}







// event listener for floating chat
sendBtn.addEventListener("click", () => {
    puterBot(userPrompt.value);
});
userPrompt.addEventListener("keydown", (event) => {
    console.log(event.key);

    if (event.key === 'Enter') {
        puterBot(userPrompt.value);
    }

});

chatClose.addEventListener("click", () => {
    chatBoxPopup.style.display = 'none';
});

chatIcon.addEventListener("click", () => {
    if (chatBoxPopup.style.display == 'flex') {
        chatBoxPopup.style.display = 'none';
    }
    else {
        chatBoxPopup.style.display = 'flex';
    }
});




// event listener for sorting in message
sortingArea.addEventListener("click", (event) => {
    const readMessage = document.querySelectorAll(".read-message");
    const unreadMessage = document.querySelectorAll(".unread-message");
    const comunityText = document.querySelector(".comunity-text");
    const contactArea = document.querySelector(".contact-area");
    const groupMessage = document.querySelectorAll(".group-message");

    if (event.target.id === "all") {
        contactArea.style.justifyContent = '';
        comunityText.style.display = 'none';
        groupMessage.forEach((div)=>{
            div.style.display ='flex';
        })
        readMessage.forEach((div) => {
            div.style.display = "flex";
        })
        unreadMessage.forEach((div) => {
            div.style.display = "flex";
        })

    }
    else if (event.target.id === "unread") {
        contactArea.style.justifyContent = '';
        groupMessage.forEach((div)=>{
            div.style.display ='none';
        })
        comunityText.style.display = 'none';
        unreadMessage.forEach((div) => {
            div.style.display = "flex";
        })

        readMessage.forEach((div) => {
            div.style.display = 'none';
        });
    }
    else if (event.target.id === "communities") {
        contactArea.style.justifyContent = 'center';
        groupMessage.forEach((div)=>{
            div.style.display ='none';
        })
        comunityText.style.display = 'flex';

        readMessage.forEach((div) => {
            div.style.display = 'none';
        });
        unreadMessage.forEach((div) => {
            div.style.display = 'none';
        })
    }
    else if (event.target.id === "groups") {        
        contactArea.style.justifyContent = '';
        comunityText.style.display = 'none';

        groupMessage.forEach((div)=>{
            div.style.display ='flex';
        })

        readMessage.forEach((div) => {
            div.style.display = 'none';
        });
        unreadMessage.forEach((div) => {
            div.style.display = 'none';
        })

    }
});

