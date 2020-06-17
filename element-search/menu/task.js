const menuLink = document.querySelectorAll("li a.menu__link");

let arrMenu = Array.from(menuLink);
   
for(let i = 0; i < arrMenu.length; i++){
    arrMenu[i].onclick = () => {
        if (arrMenu[i].parentElement.querySelector("ul.menu").className === "menu menu_sub") {
            arrMenu[i].parentElement.querySelector("ul.menu").className = "menu menu_sub menu_active";
        } else {
            arrMenu[i].parentElement.querySelector("ul.menu").className = "menu menu_sub";
        }
        return false;
    }
};