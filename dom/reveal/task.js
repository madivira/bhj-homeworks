const reveal = Array.from(document.querySelectorAll(".reveal"));
const el = document.querySelector(".reveal");

reveal.forEach(element =>
    window.addEventListener('scroll',  function () {
    let viewportHeight = window.innerHeight;
    let elementTop = element.getBoundingClientRect().top;
    
    if(elementTop < 0 || elementTop > viewportHeight) {
        return element.classList.remove("reveal_active");
     } else if (elementTop < viewportHeight) {
        return element.classList.add("reveal_active");
    }
}));
