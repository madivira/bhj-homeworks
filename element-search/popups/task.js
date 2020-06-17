const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");

modalMain.className += " modal_active";

let close = document.getElementsByClassName("modal__close");

let arrClose = Array.from(close);

for (let arr of arrClose) {

    arr.onclick = () => {
        arr.closest(".modal_active").className = "modal";
    };
};

const showSuccess = document.getElementsByClassName("show-success");

showSuccess[0].onclick = () => {
    modalMain.className = "modal";
    modalSuccess.className += " modal_active";
};