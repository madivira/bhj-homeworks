const timer =  document.getElementById("timer");

let timerId = setInterval( () =>  timer.textContent = Number(timer.textContent) - 1, 1000);

setTimeout( () => {timer.textContent = 0; alert("Вы победили в конкурсе!"); clearInterval(timerId); }, Number(timer.textContent)*1000 + 1000);