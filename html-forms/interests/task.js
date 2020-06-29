const interestActive = document.querySelectorAll(".interests_active");

interestActive.forEach(element => {

    const elInto = element.closest(".interest");//Определяем родителя
    const el = elInto.querySelector("input.interest__check");
 
    el.onchange = () => {
        const input = elInto.querySelectorAll("input");//находим все эл

        if(el.checked){//при вкл
            input.forEach(element => element.checked = true);
        } else {//при выкл
            input.forEach(element => element.checked = false);
        }
    }
});