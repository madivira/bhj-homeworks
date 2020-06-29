const chat = document.querySelector(".chat-widget__side");
const openChat = document.querySelector(".chat-widget");
const inputText = document.getElementById("chat-widget__input");
const messages = document.querySelector(".chat-widget__messages");
const height = document.querySelector(".chat-widget__messages-container");

chat.addEventListener('click', function(){
    openChat.classList.add("chat-widget_active");
});

const botMessages = [
    'Благодарим, что вы проголосовали за поправки в Конституции',
    'Добрый день! Что Вам надо?',
    'Где ваша совесть?',
    'К сожалению все операторы заняты. Не пишите сюда больше',
    'Кто тут?',
    'Мы ничего не будем Вам продавать!',
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
    'Добрый день! До свидания!',
    'Ваше сообщение не читаемо, повторите, но не тут',
    'Спасибо на хлеб не намажешь и в карман не положишь',
    'Тссс!'
];

let timerId;//таймер

inputText.onchange = () => {

    clearTimeout(timerId);//очищаем предыдущий таймер

    let time = new Date();
    let timeStr = time.toLocaleTimeString();

    if(!!inputText.value) {
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${timeStr}</div>
                <div class="message__text">${inputText.value}</div>
            </div>`
    };

    inputText.value = "";//очищает строку
 
    messages.innerHTML += `
        <div class="message">
            <div class="message__time">${timeStr}</div>
            <div class="message__text">${botMessages[Math.floor(Math.random() * 10)]}</div>
        </div>`;

    height.scrollTo(0, messages.scrollHeight);//показыввает последние сообщения

    timerId = setTimeout(() => {//При активном окне чата и простое 30 секунд, робот должен задать вопрос в чат
        
        if(openChat.classList.contains("chat-widget_active")) {
                messages.innerHTML += `
                <div class="message">
                    <div class="message__time">${timeStr}</div>
                    <div class="message__text">${botMessages[Math.floor(Math.random() * 10)]}</div>
                </div>`;
        }
        height.scrollTo(0, messages.scrollHeight);

    }, 30000);
};



