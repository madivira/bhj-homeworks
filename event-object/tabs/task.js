let nav = Array.from(document.getElementsByClassName("tab"));
let content = Array.from(document.getElementsByClassName("tab__content"));

nav.forEach(element => {
    element.addEventListener('click', function () {
        for (let el of nav) {
            el.className = "tab";
        }
        for (let el of content) {
            el.className = "tab__content";
        }
        element.classList.add("tab_active");
        content[nav.indexOf(element)].classList.add("tab__content_active");
    })
})