const modalMain = document.getElementById("subscribe-modal");

//первый вариант на проверку есть ли записи в куках
/*if(!document.cookie.length) {//если куки остались пустыми
    modalMain.className += " modal_active";

    let close = document.getElementsByClassName("modal__close");

    let arrClose = Array.from(close);

    for (let arr of arrClose) {

        arr.onclick = () => {
            document.cookie = 'key=close';
            arr.closest(".modal_active").className = "modal";
        };
    };
}*/

//второй вариант на проверку именно нужной записи в куках
 let key = document.cookie.split("key=");

 if(key == "") {
    modalMain.className += " modal_active";

    let close = document.getElementsByClassName("modal__close");

    let arrClose = Array.from(close);

    for (let arr of arrClose) {

        arr.onclick = () => {
            document.cookie = 'key=close';
            arr.closest(".modal_active").className = "modal";
        };
    };
}
