const progress = document.getElementById('progress');//индикация процесса загрузки
let form = document.getElementById('form');

form.addEventListener('submit', function(e) {//отправка формы
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded/event.total;//изменение индикации
    };
    xhr.send(formData);
    e.preventDefault();
});
