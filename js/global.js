async function load_components(reference, filePath, bool = false){
    const container = document.querySelector(reference);
    const result = await fetch(filePath);
    const html = await result.text()
    container.innerHTML = html;
    if (bool) {
        news_feed_event();
    }; 
}

await load_components("#main-header","/components/navbar.html");


// accessing btn from navbar
const navBtnArea = document.querySelector(".nav-btn-area");


// event listener for navbar buttons
navBtnArea.addEventListener("click", (event) => {
    if (event.target.id === "home-icon"){
        postWritingSection.style.display = "flex";
        load_components(".all-post-container","/components/news_feed.html", true);
    }
    else if (event.target.id === "people-icon"){
        postWritingSection.style.display = "none";
        load_components(".all-post-container","/components/people.html");
    }
    else if (event.target.id === "group-icon"){
        postWritingSection.style.display = "none";

        load_components(".all-post-container","/components/group.html");
    }
    
    
});

// peopleBtn.addEventListener("click", () => {
    
    
// });

// groupBtn.addEventListener("click", () => {
//     loadGroup()
// });