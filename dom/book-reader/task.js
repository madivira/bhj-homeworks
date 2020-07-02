const fontSize = Array.from(document.querySelectorAll("a.font-size"));
const book = document.getElementById("book");
const text = Array.from(document.querySelectorAll("div.book__control_color a"));
const background = Array.from(document.querySelectorAll("div.book__control_background a"));

function clear (array, name) {//очищаем классы
    
    for(let el of array) {
        if(el.classList.contains(name)) {
            el.classList.toggle(name);
        }
    };
};

fontSize.forEach(element => element.onclick = function () {
    
    clear(fontSize,"font-size_active");

    book.classList.remove("book_fs-big", "book_fs-small");
    
    if (element.classList.contains("font-size_small")) {
        book.classList.add("book_fs-small")
    } else if (element.classList.contains("font-size_big")) {
        book.classList.add("book_fs-big");
    }
    element.classList.add("font-size_active");
    return false;
});

text.forEach(element => element.onclick = function () {
    clear(text,"color_active");

    element.classList.add("color_active");

    book.classList.remove("book_color-gray", "book_color-whitesmoke");
    if(element.classList.contains("color_gray")) {
        book.classList.add("book_color-gray");
    } else if (element.classList.contains("color_whitesmoke")) {
        book.classList.add("book_color-whitesmoke");
    }
    return false;
});

background.forEach(element => element.onclick = function () {
    clear(background,"color_active");

    element.classList.add("color_active");

    book.classList.remove("book_bg-gray", "book_bg-black");
    if(element.classList.contains("color_gray")) {
        book.classList.add("book_bg-gray");
    } else if (element.classList.contains("color_black")) {
        book.classList.add("book_bg-black");
    }
    return false;
});
