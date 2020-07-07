let forms =document.getElementById('signin__form');//форма
let signin = document.getElementById('signin');//авторизация
let welcome = document.getElementById('welcome');//приветствие
let userId = document.getElementById('user_id');//юзер
let out = document.getElementById('out__btn');//выход

if (localStorage.getItem('id')) {//если пользователь был авторизирован 
    welcome.classList.add('welcome_active');
    userId.innerText = `${localStorage.getItem('id')}`;
} else {//если не был авторизирован
    signin.classList.add('signin_active');

    forms.addEventListener('submit', (e)  => {//Отправка формы
    
        let formData = new FormData(forms);//форма
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        xhr.responseType = 'json';
        xhr.onreadystatechange = function () {//проверка ответа

            if (this.readyState === 4) {//пришел ответ

                if(xhr.response["success"]) {//если данные верны
                    localStorage.setItem('id', `${xhr.response["user_id"]}`);//сохрание в локальном хранилище
                    welcome.classList.add('welcome_active');//вывод приветствия
                    signin.className = 'signin';//скрыть форму
                    userId.innerText = `${localStorage.getItem('id')}`;//добавление айди пользователя в приветствие

                } else {//если данные неверны
                    for(let input of document.querySelectorAll('input.control')) {//очищение полей
                        input.value = "";
                    }
                    alert('Неверный логин/пароль');
                };
            };
        };

        xhr.send(formData);//отправка 

        e.preventDefault(); //запрет на обычную отправку формы
    });
};

out.addEventListener('click', function() {//деавторизация
    localStorage.removeItem('id');
    welcome.className = 'welcome';
    signin.classList.add('signin_active');
    for(let input of document.querySelectorAll('input.control')) {//очищение полей
        input.value = "";
    }
});