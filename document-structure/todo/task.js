const input = document.getElementById("task__input");
const button = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

button.onclick = () => {
    const elementTask = document.createElement('div');
    elementTask.classList.add("task");
    elementTask.innerHTML = `<div class="task__title"> ${input.value} </div> <a href="#" class="task__remove"> &times; </a>`;
    tasksList.insertAdjacentElement('afterbegin', elementTask);
    input.value = '';

    let remove = document.querySelectorAll("a.task__remove");
    remove.forEach(element => {

        element.onclick = () =>{
            element.closest("div.task").remove();
            return false;
        }
    })
};