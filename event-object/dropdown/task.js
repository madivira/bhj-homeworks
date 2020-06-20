let dropdownList = document.querySelector("ul.dropdown__list");
let dropdownValue = document.querySelector("div.dropdown__value");
let dropdownLink = Array.from(document.getElementsByClassName("dropdown__link"));

dropdownValue.addEventListener('click', showDropList);

function showDropList () {
    if (dropdownList.className === "dropdown__list"){
        dropdownList.classList.add("dropdown__list_active");
    } else {
        dropdownList.className = "dropdown__list";
    }
};

dropdownLink.forEach(element => {
    element.closest("li").onclick =  event => {
        dropdownValue.textContent =  event.currentTarget.textContent;
        dropdownList.className = "dropdown__list";
        return false;
    }
});