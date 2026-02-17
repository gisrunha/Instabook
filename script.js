// accessing action area's buttons
const likeBtn = document.querySelector(".left-side-btns .like-btn");
const commentBtn = document.querySelector(".left-side-btns .comment-btn");
const shareBtn = document.querySelector(".left-side-btns .share-btn");
const saveBtn = document.querySelector(".action-area .save-btn");

// accessing btn from navbar
const homeBtn = document.querySelector(".nav-btn-area .ri-home-7-line");
const peopleBtn = document.querySelector(".nav-btn-area .ri-user-3-line");


// variable for counting like,comment,share.
let likeCount = 0;
let commentCount = 0;
let shareCount = 0;


// function for changing navbar btn on click




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


// event listener on action buttons
likeBtn.addEventListener("click", () => {
    action_btn_effect(likeBtn, "ri-heart-3-line", "ri-heart-3-fill");
});
commentBtn.addEventListener("click", () => {
    action_btn_effect(commentBtn, "ri-chat-3-line", "ri-chat-3-fill");
});
shareBtn.addEventListener("click", () => {
    action_btn_effect(shareBtn, "ri-share-line", "ri-share-fill");
});
saveBtn.addEventListener("click", () => {
    action_btn_effect(saveBtn, "ri-bookmark-2-line", "ri-bookmark-2-fill");
});

// event listener on navbar buttons
// homeBtn.addEventListener("click", () => {
//     homeBtn.classList.toggle("active-nav-btn");
//     navbar_btn_effect();
// });

