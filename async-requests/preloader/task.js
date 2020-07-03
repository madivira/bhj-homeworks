const loader = document.getElementById('loader');//загрузка
const item = document.querySelector('#items');//сюда вставляем данных о валюте

let xhr = new XMLHttpRequest();//формирование запроса на сервер
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.responseType = 'json';//изменить полученный тип данных
xhr.send();//отправка

xhr.onreadystatechange = function () { 
    if(xhr.readyState === 4) { 
        loader.style.display = 'none'; //скрыть загрузку
       
        let xhrAnswer = Object.values(xhr.response.response.Valute);//массив объектов полученных данных валют

        for(let element of xhrAnswer) {//вывод полученных данных
            item.insertAdjacentHTML('beforeend', `
            <div class="item">
                <div class="item__code">
                    ${element.CharCode}
                </div>
                <div class="item__value">
                    ${element.Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`)
        }
    }; 
};