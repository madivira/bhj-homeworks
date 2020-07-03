let title = document.getElementById('poll__title');//вопрос
let answers = document.getElementById('poll__answers');//ответ

let xhr = new XMLHttpRequest();//формирование запроса на сервер
xhr.open('GET', ' https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';//изменить полученный тип данных
xhr.send();//отправка

xhr.onreadystatechange = function () { 
    if(xhr.readyState === 4) { 
        title.innerText = xhr.response.data.title;//добавление вопроса

        for(let answer of xhr.response.data.answers) {//добавление ответов
            answers.insertAdjacentHTML('beforeend', `
                <button class="poll__answer">
                    ${answer}
                </button>`)
        }

        let answerButton = Array.from(document.querySelectorAll('button.poll__answer'));
        
        answerButton.forEach( element =>//выбор ответа и вывод окна
            element.onclick = () => {
                alert('Спасибо, ваш голос засчитан!');
            });

    };
};