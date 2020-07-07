let editor = document.getElementById('editor');//поле ввода
let clear = document.querySelector('.clear')//кнопка очищения поля

editor.oninput = () => {//сохранение
    localStorage.setItem('key',`${editor.value}`);
}

editor.value = localStorage.getItem('key');//вывод после перезагрузки

clear.onclick = () => {//очищение поля ввода и удаление из хранилища
    editor.value = '';
    localStorage.removeItem('key');
};