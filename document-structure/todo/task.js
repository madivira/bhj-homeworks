const input = document.getElementById("task__input");
const button = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

button.onclick = () => {
    if(!input.value.length) {//проверка на пустоту
        return false;
    } else {
        const elementTask = document.createElement('div');//добавляемый элемент
        elementTask.classList.add("task");
        elementTask.innerHTML = `<div class="task__title"> ${input.value} </div> <a href="#" class="task__remove"> &times; </a>`;
        tasksList.insertAdjacentElement('afterbegin', elementTask);
        input.value = '';
    }
    
    let remove = document.querySelectorAll("a.task__remove");//удаление
    remove.forEach(element => {
        element.onclick = () =>{
            element.closest("div.task").remove();
            return false;
        }
    });
    return false;
};